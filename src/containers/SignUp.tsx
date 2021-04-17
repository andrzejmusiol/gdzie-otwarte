import React from "react"
import { SignInUpForm } from "../utils/styled-components"
import registerImage from "../assets/icons/register.svg"
import SignUpForm from "../components/forms/SignUpForm"
import { messages } from "../utils/messages"

const SignUp = (): JSX.Element => {
  return (
    <>
      <SignInUpForm>
        <div className="sign-in-up-left-side">
          <h1>{messages.site.signUpMessageHeaderText}</h1>
          <p>{messages.site.signUpMessageSubHeaderText}</p>
          <SignUpForm />
        </div>
        <div className="sign-in-up-right-side">
          <img src={registerImage} />
        </div>
      </SignInUpForm>
    </>
  )
}

export default SignUp
