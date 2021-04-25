import React from "react"
import {
    fireEvent,
    render,
    RenderResult,
    waitFor,
} from "@testing-library/react"

import matchMedia from "../../utils/matchMedia"
import SignUp from "../SignUp"

const setUpWrapper = (): RenderResult => {
    return render(
            <SignUp />
    )
}

describe("<SignUp />", () => {
    let element: RenderResult
    matchMedia()

    beforeEach(() => {
        element = setUpWrapper()
    })

    it("should render sign in button and send empty data request", async () => {
        const signInButton = await waitFor(() => element.getByTestId("sign-up-button-test-id"))

        expect(signInButton).toBeInTheDocument()
        await fireEvent.click(signInButton)

        const errorMessage = await waitFor(() => element.getByTestId("sign-up-error-test-id"))

        expect(errorMessage).toBeInTheDocument()
        expect(errorMessage).not.toBeEmptyDOMElement()
    })

    it("should fill up sign up form and send request", async () => {
        const testUserName = process.env.REACT_APP_TEST_USER_NAME
        const testUserEmail = process.env.REACT_APP_TEST_USER_EMAIL
        const testUserPassword = process.env.REACT_APP_TEST_USER_PASSWORD
        const nameInput = await waitFor(() => element.getByTestId("name-input-test-id"))
        const emailInput = await waitFor(() => element.getByTestId("email-input-test-id"))
        const passwordInput = await waitFor(() => element.getByTestId("password-input-test-id"))
        const signInButton = await waitFor(() => element.getByTestId("sign-up-button-test-id"))

        await fireEvent.change(nameInput, { target: { value: testUserName } })
        await fireEvent.change(emailInput, { target: { value: testUserEmail } })
        await fireEvent.change(passwordInput, { target: { value: testUserPassword } })

        expect(nameInput).toHaveValue(testUserName)
        expect(emailInput).toHaveValue(testUserEmail)
        expect(passwordInput).toHaveValue(testUserPassword)

        await fireEvent.click(signInButton)

        const errorMessage = await waitFor(() => element.getByTestId("sign-up-error-test-id"))

        expect(errorMessage).toBeEmptyDOMElement()
    })

})
