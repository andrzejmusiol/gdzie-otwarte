import React from "react"
import Header from "../components/header/Header"
import { SignInUpForm } from "../utils/styled-components"
import loginImage from "../assets/icons/login.svg"
import SignInForm from "../components/forms/SignInForm"

const SignIn = (): JSX.Element => {
  return (
    <>
      <Header />
      <SignInUpForm>
        <div className="sign-in-up-right-side">
          <img src={loginImage} />
        </div>
        <div className="sign-in-up-left-side">
          <h1>Zaloguj się, aby dodać się na mapę!</h1>
          <SignInForm />
        </div>
      </SignInUpForm>
    </>
  )
}

export default SignIn
