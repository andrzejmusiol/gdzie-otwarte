import React from "react"
import Cookies from "js-cookie"
import { Button, notification } from "antd"
import { cookiesHeader, cookiesMessage } from "../utils/messages"

export const cookiesSettings = (): void => {
  const cookieStatus = Cookies.get("cookiesConfirmation")
  const setCookies = () =>
    Cookies.set("cookiesConfirmation", "confirmed", { expires: 90 })
  const key = `open${Date.now()}`
  const btn = (
    <Button
      type="primary"
      size="small"
      onClick={() => {
        notification.close(key)
        setCookies()
      }}
    >
      Rozumiem
    </Button>
  )

  if (cookieStatus !== "confirmed")
    notification.open({
      placement: "bottomLeft",
      duration: 10,
      message: cookiesHeader,
      description: cookiesMessage,
      btn,
      key,
    })
}
