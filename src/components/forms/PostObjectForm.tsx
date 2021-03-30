import React, { ReactNode, useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { PostFormValues } from "../../types/types"
import axios from "axios"
import { GlobalContext } from "../../store"

const PostObjectForm = (): JSX.Element => {
  const { register, errors, handleSubmit } = useForm<PostFormValues>()
  const [status, setStatus] = useState("")
  const REGISTER_ENDPOINT = process.env.REACT_APP_POST_ENDPOINT
  const token = sessionStorage.getItem("token")

  const onSubmit = handleSubmit((data) => {
    if (REGISTER_ENDPOINT)
      axios
        .post(
          REGISTER_ENDPOINT,
          {
            name: data.object_name,
            city: data.object_city,
            address: data.object_address,
            category: data.object_type,
            published_at: null,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setStatus("Twój punkt został dodany i oczekuje na moderację")
        })
        .catch(() => {
          setStatus("Błąd, sprawdź poprawność danych")
        })
  })

  const renderOptionsCategoryOptions = (): ReactNode => {
    const name = process.env.REACT_APP_NAME
    const cat = process.env.REACT_APP_CAT
    const { mapObjects } = useContext(GlobalContext)

    return mapObjects.map((object: { [x: string]: never }) => {
      return (
        <option key={object[`${name}`]} value={object[`${cat}`]}>
          {object[`${cat}`]}
        </option>
      )
    })
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="object_name"
          placeholder="Nazwa lokalu..."
          ref={register({ required: true, maxLength: 50 })}
        />
        {errors.object_name?.type === "required" && (
          <p>Nazwa lokalu jest wymagana</p>
        )}
        {errors.object_name?.type === "maxLength" && (
          <p>Nazwa lokalu może mieć max 50 znaków</p>
        )}
        <input
          name="object_city"
          placeholder="Miasto..."
          ref={register({ required: true, minLength: 3, maxLength: 25 })}
        />
        {errors.object_city?.type === "required" && <p>Miasto jest wymagane</p>}
        {errors.object_city?.type === "minLength" && (
          <p>Miasto musi mieć min 3 znaki</p>
        )}
        {errors.object_city?.type === "maxLength" && (
          <p> Adres może mieć max 25 znaków</p>
        )}
        <input
          name="object_address"
          placeholder="Adres..."
          ref={register({ required: true, minLength: 8, maxLength: 100 })}
        />
        {errors.object_address?.type === "required" && (
          <p>Adres jest wymagany</p>
        )}
        {errors.object_address?.type === "minLength" && (
          <p>Adres musi mieć min 8 znaków</p>
        )}
        {errors.object_address?.type === "maxLength" && (
          <p> Adres może mieć max 100 znaków</p>
        )}
        <select name="object_type" placeholder="Kategoria..." ref={register}>
          {renderOptionsCategoryOptions()}
        </select>
        {errors.object_type?.type === "required" && (
          <p>Kategoria jest wymagany</p>
        )}
        <input type="submit" />
      </form>
      <div className="error-wrapper">{status}</div>
    </>
  )
}

export default PostObjectForm
