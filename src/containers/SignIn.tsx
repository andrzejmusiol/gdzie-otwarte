import React from "react"
import { SignInUpForm } from "../utils/styled-components"
import loginImage from "../assets/icons/login.svg"
import SignInForm from "../components/forms/SignInForm"
import { signInMessage } from "../utils/messages"

const SignIn = (): JSX.Element => {
  return (
    <>
      <SignInUpForm>
        <div className="sign-in-up-right-side">
          <img src={loginImage} />
        </div>
        <div className="sign-in-up-left-side">
          <h1>{signInMessage}</h1>
          <SignInForm />
        </div>
      </SignInUpForm>
    </>
  )
}

export default SignIn
