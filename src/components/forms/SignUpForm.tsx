import React, { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Form, Input, Button } from "antd"
import { messages } from "../../utils/messages"

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
          setStatus(messages.forms.signUpSuccess)
          sessionStorage.setItem("token", response.data.jwt)
          history.push("/map")
        })
        .catch(() => {
          setStatus(messages.axios.axiosFailure)
        })
  }

  const onFinishFailed = () => {
    setStatus(messages.axios.formFailure)
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
            { required: true, message: messages.forms.basicNameMessage },
            { max: 50, message: messages.forms.maxNameMessage },
            { min: 4, message: messages.forms.minNameMessage },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="E-mail"
          labelAlign="left"
          name="email"
          rules={[
            { required: true, message: messages.forms.basicEmailMessage },
            { max: 50, message: messages.forms.maxEmailMessage },
            { min: 4, message: messages.forms.minEmailMessage },
            { type: "email", message: messages.forms.typeEmailMessage },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Hasło"
          name="password"
          labelAlign="left"
          rules={[
            { required: true, message: messages.forms.basicPasswordMessage },
            { max: 50, message: messages.forms.maxPasswordMessage },
            { min: 6, message: messages.forms.minPasswordMessage },
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
