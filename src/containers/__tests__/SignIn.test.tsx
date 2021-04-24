import React from "react"
import {
    fireEvent,
    render,
    RenderResult,
    waitFor,
} from "@testing-library/react"

import matchMedia from "../../utils/matchMedia"
import SignIn from "../SignIn"
import { MemoryRouter } from 'react-router-dom'

const setUpWrapper = (): RenderResult => {
    return render(
        <MemoryRouter
            initialEntries={["/logowanie", "/map"]}
            initialIndex={0}
        >
            <SignIn />
        </MemoryRouter>
    )
}

describe("<Map />", () => {
    let element: RenderResult
    matchMedia()

    beforeEach(() => {
        element = setUpWrapper()
    })

    it("should render sign in button", async () => {
        const signInButton = await waitFor(() => element.getByTestId("sign-in-button-test-id"))

        expect(signInButton).toBeInTheDocument()
        await fireEvent.click(signInButton)

        const errorMessage = await waitFor(() => element.getByTestId("sign-in-error-test-id"))

        expect(errorMessage).toBeInTheDocument()
    })

    it("should fill up sign in form", async () => {
        const testUserEmail = process.env.REACT_APP_TEST_USER_EMAIL
        const testUserPassword = process.env.REACT_APP_TEST_USER_PASSWORD
        const emailInput = await waitFor(() => element.getByTestId("email-input-test-id"))
        const passwordInput = await waitFor(() => element.getByTestId("password-input-test-id"))
        const signInButton = await waitFor(() => element.getByTestId("sign-in-button-test-id"))

        await fireEvent.change(emailInput, { target: { value: testUserEmail } })
        await fireEvent.change(passwordInput, { target: { value: testUserPassword } })

        expect(emailInput).toHaveValue(testUserEmail)
        expect(passwordInput).toHaveValue(testUserPassword)

        await fireEvent.click(signInButton)

        const history = await waitFor(() => element.getByText(/map/i))

        expect(history).toBeInTheDocument()
    })

})
