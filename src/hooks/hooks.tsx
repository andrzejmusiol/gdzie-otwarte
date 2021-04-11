import { useState, useEffect } from "react"
import { windowDimensions } from "../types/types"

const getWindowDimensions = (): windowDimensions => {
  const { innerWidth: width } = window
  return {
    width,
  }
}

export const useWindowDimensions = (): windowDimensions => {
  const [windowWidth, setWindowWidth] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowWidth
}
