import React from "react"
import matchMedia from "../../utils/matchMedia"
import { render, RenderResult, waitFor } from "@testing-library/react"
import WelcomePage from "../WelcomePage"
import { BrowserRouter as Router } from "react-router-dom"

const setUpWrapper = (): RenderResult => {
  return render(
    <Router>
      <WelcomePage />
    </Router>
  )
}

describe("<WelcomePage />", () => {
  let element: RenderResult
  matchMedia()
  beforeEach(() => {
    element = setUpWrapper()
  })

  it("should render WelcomePage components", async () => {
    const pageRow = await waitFor(() =>
      element.getByTestId("welcome-row-test-id")
    )
    const mapButton = await waitFor(() =>
      element.getByTestId("welcome-btn-map-test-id")
    )
    const aboutButton = await waitFor(() =>
      element.getByTestId("welcome-btn-about-id-test-id")
    )

    expect(pageRow).toBeInTheDocument()
    expect(mapButton).toBeInTheDocument()
    expect(aboutButton).toBeInTheDocument()
  })
})
