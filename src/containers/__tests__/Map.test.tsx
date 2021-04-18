import React from "react"
import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from "@testing-library/react"
import Map from "../Map"
import matchMedia from "./matchMedia"
import { GlobalContext } from "../../store"
import { mapObjects } from "../__mocks__/mock-data"

const setUpWrapper = (): RenderResult => {
  return render(
    <GlobalContext.Provider value={{ mapObjects }}>
      <Map />
    </GlobalContext.Provider>
  )
}

describe("<Map />", () => {
  let element: RenderResult
  matchMedia()
  beforeEach(() => {
    element = setUpWrapper()
  })

  it("should render not be visible cause of objects", async () => {
    const loader = await waitFor(() => element.queryByTestId("loader-test-id"))
    expect(loader).not.toBeInTheDocument()
  })

  it("should get map objects and show tooltip on marker clik", async () => {
    const markers = await waitFor(() =>
      document.getElementsByClassName("leaflet-marker-icon")
    )
    expect(markers.length).toEqual(2)

    await fireEvent.click(markers[0])

    const tooltip = await waitFor(() =>
      document.getElementsByClassName("leaflet-popup")
    )
    expect(tooltip.length).toBe(1)
  })
})
