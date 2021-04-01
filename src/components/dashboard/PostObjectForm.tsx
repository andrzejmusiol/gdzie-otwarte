import React, { ReactNode, useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { PostFormValues } from "../../types/types"
import axios from "axios"
import { GlobalContext } from "../../store"
import { Map, TileLayer, Circle } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import Search from "react-leaflet-search"

const PostObjectForm = (): JSX.Element => {
  const { register, errors, handleSubmit } = useForm<PostFormValues>()
  const [status, setStatus] = useState("")
  const addressCoordinatesInitialState: {
    latLng: { lat: number; lng: number }
  } = {
    latLng: {
      lat: 0,
      lng: 0,
    },
  }
  const [addressCoordinates, setAddressCoordinates] = useState(
    addressCoordinatesInitialState
  )
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
            lat: data.object_lat,
            lng: data.object_lng,
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
    const { categories } = useContext(GlobalContext)

    return categories.map((category: { [x: string]: never }) => {
      return (
        <option key={category[`${name}`]} value={category[`${cat}`]}>
          {category[`${cat}`]}
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
        <input
          name="object_lat"
          className="coordinates-input"
          value={addressCoordinates.latLng.lat}
          ref={register}
        />
        <input
          name="object_lng"
          className="coordinates-input"
          value={addressCoordinates.latLng.lng}
          ref={register}
        />
        {errors.object_city?.type === "required" && <p>Miasto jest wymagane</p>}
        {errors.object_city?.type === "minLength" && (
          <p>Miasto musi mieć min 3 znaki</p>
        )}
        {errors.object_city?.type === "maxLength" && (
          <p> Adres może mieć max 25 znaków</p>
        )}
        <Map
          center={[52.20386307153011, 19.137394372476308]}
          zoom={7}
          className="form-map"
        >
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          />
          <Search
            onChange={(addressData) => {
              setAddressCoordinates(addressData)
            }}
            position="topright"
            inputPlaceholder="Wpisz adres..."
            showMarker={false}
            zoom={16}
            closeResultsOnClick={true}
            openSearchOnLoad={false}
            providerOptions={{
              region: "pl",
            }}
          >
            {(info) => (
              <Circle
                center={info?.latLng}
                pathOptions={{ fillColor: "blue" }}
                radius={50}
              />
            )}
          </Search>
        </Map>
        <input
          name="object_address"
          placeholder="Powtórz adres..."
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
