import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { FormValues } from "../../types/types"
import axios from "axios"

const SignUpForm = (): JSX.Element => {
  const { register, errors, handleSubmit } = useForm<FormValues>()
  const [status, setStatus] = useState("")
  const REGISTER_ENDPOINT = process.env.REACT_APP_REGISTER_ENDPOINT

  const onSubmit = handleSubmit((data) => {
    if (REGISTER_ENDPOINT)
      axios
        .post(REGISTER_ENDPOINT.toString(), {
          username: data.name,
          email: data.email,
          password: data.password,
        })
        .then((response) => {
          setStatus("Rejestracja przebiegła pomyślnie!")
          console.log("User profile", response.data.user)
          console.log("User token", response.data.jwt)
        })
        .catch(() => {
          setStatus("Błąd, sprawdź poprawność danych")
        })
  })

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="name"
          placeholder="Imię.."
          ref={register({ required: true, minLength: 3, maxLength: 25 })}
        />
        {errors.name?.type === "required" && <p>Imię jest wymagane</p>}
        {errors.name?.type === "minLength" && (
          <p>Imię musi mieć min 3 znaków</p>
        )}
        {errors.name?.type === "maxLength" && (
          <p>Imię może mieć max 25 znaków</p>
        )}
        <input
          name="email"
          placeholder="E-mail"
          ref={register({ required: true, maxLength: 50 })}
        />
        {errors.email?.type === "required" && <p>E-mail jest wymagany</p>}
        {errors.email?.type === "maxLength" && (
          <p> E-mail musi miećmaksimum 25</p>
        )}
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

export default SignUpForm
