import React from "react"
import { SignInUpForm } from "../utils/styled-components"
import registerImage from "../assets/icons/register.svg"
import SignUpForm from "../components/forms/SignUpForm"
import {
  signUpMessageHeaderText,
  signUpMessageSubHeaderText,
} from "../utils/messages"

const SignUp = (): JSX.Element => {
  return (
    <>
      <SignInUpForm>
        <div className="sign-in-up-left-side">
          <h1>{signUpMessageHeaderText}</h1>
          <p>{signUpMessageSubHeaderText}</p>
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
