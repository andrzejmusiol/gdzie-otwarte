import React from "react"
import Cookies from "js-cookie"
import { Button, notification } from "antd"
import { messages } from "../utils/messages"
import {useHistory} from "react-router-dom"

const CookieNotification = (): JSX.Element => {
    const history = useHistory()
    const setCookies = () =>
        Cookies.set("cookiesConfirmation", "confirmed", { expires: 90 })
    const key = `open${Date.now()}`
    const btn = (
        <div>
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
            <Button
                type="link"
                size="small"
                target="_blank"
                onClick={() => history.push("/polityka-prywatnosci")}
            >
                Polityka prywatności
            </Button>
        </div>
    )
    notification.open({
        placement: "bottomLeft",
        duration: 10,
        message: messages.cookies.cookiesHeader,
        description: messages.cookies.cookiesMessage,
        btn,
        key,
    })
    return (
       <></>
    )
}

export default CookieNotification
