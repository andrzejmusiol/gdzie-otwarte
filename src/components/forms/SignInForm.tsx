import React, { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Button, Form, Input } from "antd"
import {
  axiosFailure,
  basicEmailMessage,
  basicPasswordMessage,
  formFailure,
  signInSuccess,
  maxEmailMessage,
  minEmailMessage,
  minPasswordMessage,
  typeEmailMessage,
} from "../../utils/messages"

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
          setStatus(signInSuccess)
          sessionStorage.setItem("token", response.data.jwt)
          sessionStorage.setItem("user", JSON.stringify(response.data.user))
          sessionStorage.setItem("auth", String(true))
          history.push("/map")
        })
        .catch(() => {
          setStatus(axiosFailure)
        })
  }

  const onFinishFailed = () => {
    setStatus(formFailure)
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
            { required: true, message: basicEmailMessage },
            { max: 50, message: maxEmailMessage },
            { min: 4, message: minEmailMessage },
            { type: "email", message: typeEmailMessage },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Hasło"
          name="password"
          labelAlign="left"
          rules={[
            { required: true, message: basicPasswordMessage },
            { min: 6, message: minPasswordMessage },
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
