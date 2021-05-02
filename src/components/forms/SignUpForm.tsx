import React, { LegacyRef, useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Form, Input, Button } from "antd"
import { messages } from "../../utils/messages"
import ReCAPTCHA from "react-google-recaptcha"
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'

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

  const recaptchaRef: LegacyRef<ReCAPTCHA> | undefined = React.createRef()
  const REGISTER_ENDPOINT = process.env.REACT_APP_REGISTER_ENDPOINT
  const GRCAPTCHA_KEY = process.env.REACT_APP_GRCAPTCHA_KEY

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

  const onChange = (value: any) => {
    console.warn("Google reCaptcha: ", value)
  }

  return (
    <>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={(data): any => {
          onFinish(data)
          ;(recaptchaRef as any).current.execute()
        }}
        onFinishFailed={onFinishFailed}
      >
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={GRCAPTCHA_KEY ? GRCAPTCHA_KEY : ""}
          onChange={onChange}
        />
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
          <Input data-testid="name-input-test-id"  prefix={<UserOutlined className="site-form-item-icon" />}/>
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
          <Input data-testid="email-input-test-id" prefix={<MailOutlined  className="site-form-item-icon"/>}/>
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
          <Input.Password data-testid="password-input-test-id" prefix={<LockOutlined className="site-form-item-icon" />}/>
        </Form.Item>
          <Form.Item
              label="Powrtórz hasło"
              name="confirm"
              labelAlign="left"
              rules={[
                  { required: true, message: messages.forms.basicPasswordMessage },
                  { max: 50, message: messages.forms.maxPasswordMessage },
                  { min: 6, message: messages.forms.minPasswordMessage },
                  ({ getFieldValue }) => ({
                      validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                              return Promise.resolve()
                          }
                          return Promise.reject(new Error('Hasła nie są identyczne!'))
                      },
                  }),
              ]}
          >
              <Input.Password data-testid="password-input-test-id" prefix={<LockOutlined className="site-form-item-icon" />}/>
          </Form.Item>
        <div className="error-wrapper" data-testid="sign-up-error-test-id">
          {status}
        </div>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            data-testid="sign-up-button-test-id"
          >
            Wyślij
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default SignUpForm
