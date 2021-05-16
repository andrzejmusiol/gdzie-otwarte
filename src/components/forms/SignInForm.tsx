import React, { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Button, Form, Input } from "antd"
import { messages } from "../../utils/messages"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import {LOGIN_ENDPOINT} from "../../utils/constans"
import Loader from "../map/Loader"

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
  const [loading, isLoading] = useState(false)
  const history = useHistory()


  const onFinish = (data: any) => {
    isLoading(true)
    if (LOGIN_ENDPOINT)
      axios
        .post(LOGIN_ENDPOINT, {
          identifier: data.email,
          password: data.password,
        })
        .then((response) => {
          isLoading(false)
          setStatus(messages.forms.signInSuccess)
          sessionStorage.setItem("token", response.data.jwt)
          sessionStorage.setItem("user", JSON.stringify(response.data.user))
          sessionStorage.setItem("auth", String(true))
          history.push("/map")
        })
        .catch(() => {
          isLoading(false)
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
        onFinish={(data): any => {
          onFinish(data)
        }}
        onFinishFailed={onFinishFailed}
        data-testid="sign-in-form-test-id"
      >
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
          <Input
            data-testid="email-input-test-id"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
        <Form.Item
          label="Hasło"
          name="password"
          labelAlign="left"
          rules={[
            { required: true, message: messages.forms.basicPasswordMessage },
            { min: 6, message: messages.forms.minPasswordMessage },
          ]}
        >
          <Input.Password
            data-testid="password-input-test-id"
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
        <div className="error-wrapper" data-testid="sign-in-error-test-id">
          {status}
        </div>
        <Form.Item>
          {loading
              ? <Loader />
              :   <Button
                  type="primary"
                  htmlType="submit"
                  data-testid="sign-in-button-test-id"
              >
                Wyślij
              </Button>
          }
        </Form.Item>
      </Form>
    </>
  )
}

export default SignInForm
