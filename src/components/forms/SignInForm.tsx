import React, { useState } from "react"
import axios from "axios"
import Cookie from "js-cookie"
import { useHistory } from "react-router-dom"
import { Button, Form, Input } from "antd"

const SignInForm = (): JSX.Element => {
  const layout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
      md: { span: 6 },
      lg: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
      md: { span: 16 },
      lg: { span: 16 },
    },
  }

  const [status, setStatus] = useState("")
  const REGISTER_ENDPOINT = process.env.REACT_APP_LOGIN_ENDPOINT
  const history = useHistory()

  const onFinish = (data: any) => {
    if (REGISTER_ENDPOINT)
      axios
        .post(REGISTER_ENDPOINT, {
          identifier: data.email,
          password: data.password,
        })
        .then((response) => {
          setStatus("Zalogowano!")
          Cookie.set("token", response.data.jwt)
          sessionStorage.setItem("token", response.data.jwt)
          sessionStorage.setItem("user", JSON.stringify(response.data.user))
          sessionStorage.setItem("auth", String(true))
          history.push("/map")
        })
        .catch(() => {
          setStatus("Błąd, sprawdź poprawność danych")
        })
  }

  const onFinishFailed = () => {
    setStatus("Coś poszło nie tak, spróbuj ponownie")
  }

  return (
    <>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="E-mail"
          labelAlign="left"
          name="email"
          rules={[
            { required: true, message: "Wpisz swójj e-mail" },
            { max: 50, message: "E-mail jest zbyt długi" },
            { min: 4, message: "E-mail jest zbyt krótki" },
            { type: "email", message: "Podaj prawidłowy e-mail" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Hasło"
          name="password"
          labelAlign="left"
          rules={[
            { required: true, message: "Podaj prawidłowe hasło" },
            { min: 6, message: "Twoje hasło ma min 6 znaków" },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <div className="error-wrapper">{status}</div>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Wyślij
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default SignInForm
