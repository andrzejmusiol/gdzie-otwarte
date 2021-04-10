import React, { useState } from "react"
import axios from "axios"
import Cookie from "js-cookie"
import { useHistory } from "react-router-dom"
import { Form, Input, Button } from "antd"

const SignUpForm = (): JSX.Element => {
  const layout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
      md: { span: 8 },
      lg: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
      md: { span: 20 },
      lg: { span: 16 },
    },
  }

  const [status, setStatus] = useState("")
  const history = useHistory()
  const REGISTER_ENDPOINT = process.env.REACT_APP_REGISTER_ENDPOINT

  const onFinish = (data: any) => {
    if (REGISTER_ENDPOINT)
      axios
        .post(REGISTER_ENDPOINT, {
          username: data.username,
          email: data.email,
          password: data.password,
        })
        .then((response) => {
          setStatus("Rejestracja przebiegła pomyślnie!")
          Cookie.set("token", response.data.jwt)
          sessionStorage.setItem("token", response.data.jwt)
          history.push("/map")
        })
        .catch(() => {
          setStatus("Coś poszło nie tak, spróbuj ponownie")
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
          label="Imię i nazwisko"
          labelAlign="left"
          name="username"
          rules={[
            { required: true, message: "Wpisz swoje imię i nazwisko!" },
            { max: 50, message: "Imię i nazwisko mogą mieć max 50 znaków" },
            { min: 4, message: "Imię i nazwisko mogą mieć min 4 znaków." },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="E-mail"
          labelAlign="left"
          name="email"
          rules={[
            { required: true, message: "Wpisz swójj e-mail!" },
            { type: "email", message: "Podaj prawidłowy e-mail" },
            { max: 50, message: "E-mail jest zbyt długi" },
            { min: 4, message: "E-mail jest zbyt krótki" },
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
            { max: 50, message: "Hasło może mieć max 50 znaków" },
            { min: 6, message: "Hasło musi mieć min 6 znaków." },
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

export default SignUpForm
