import React from "react"
import Header from "../components/header/Header"
import { SignInUpForm } from "../utils/styled-components"
import registerImage from "../assets/icons/register.svg"
import SignUpForm from "../components/forms/SignUpForm"

const SignUp = (): JSX.Element => {
  return (
    <>
      <Header />
      <SignInUpForm>
        <div className="sign-in-up-left-side">
          <h1>Zarejestruj się i dodaj swój lokal!</h1>
          <p>Nie zgadzaj się na bezprawne obostrzenia</p>
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
