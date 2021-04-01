import React, { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { FormValues } from "../../types/types"
import axios from "axios"
import { GlobalContext } from "../../store"
import Cookie from "js-cookie"
import { useHistory } from "react-router-dom"

const SignInForm = (): JSX.Element => {
  const { register, errors, handleSubmit } = useForm<FormValues>()
  const { setAuth, setUser } = useContext(GlobalContext)
  const [status, setStatus] = useState("")
  const REGISTER_ENDPOINT = process.env.REACT_APP_LOGIN_ENDPOINT
  const history = useHistory()

  const onSubmit = handleSubmit((data) => {
    if (REGISTER_ENDPOINT)
      axios
        .post(REGISTER_ENDPOINT, {
          identifier: data.email,
          password: data.password,
        })
        .then((response) => {
          setStatus("Zalogowano!")
          setAuth(true)
          setUser(response.data.user)
          Cookie.set("token", response.data.jwt)
          sessionStorage.setItem("token", response.data.jwt)
          history.push("/map")
        })
        .catch(() => {
          setStatus("Błąd, sprawdź poprawność danych")
        })
  })

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          placeholder="E-mail"
          ref={register({ required: true, maxLength: 50 })}
        />
        {errors.email?.type === "required" && <p>E-mail jest wymagany</p>}
        {errors.email?.type === "maxLength" && <p>E-mail może mieć max 25</p>}
        <input
          name="password"
          placeholder="Hasło..."
          ref={register({ required: true, minLength: 8, maxLength: 50 })}
        />
        {errors.password?.type === "required" && <p>Hasło jest wymagane</p>}
        {errors.password?.type === "minLength" && (
          <p> Hasło musi mieć min 8 znaków</p>
        )}
        {errors.password?.type === "maxLength" && (
          <p> Hasło może mieć max 50 znaków</p>
        )}
        <input type="submit" />
      </form>
      <div className="error-wrapper">{status}</div>
    </>
  )
}

export default SignInForm
