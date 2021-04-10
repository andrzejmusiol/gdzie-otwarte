import React, { ReactNode, useContext, useState } from "react"
import axios from "axios"
import { GlobalContext } from "../../store"
import { Map, TileLayer, Circle } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import Search from "react-leaflet-search"
import { Form, Input, Button, Select } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import { FormInstance } from "antd/lib/form"

const PostObjectForm = (): JSX.Element => {
  const layout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 24 },
      lg: { span: 3 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 24 },
      lg: { span: 12 },
    },
  }
  const addressCoordinatesInitialState: {
    latLng: { lat: number; lng: number }
  } = {
    latLng: {
      lat: 0,
      lng: 0,
    },
  }
  const [status, setStatus] = useState("")
  const [addressCoordinates, setAddressCoordinates] = useState(
    addressCoordinatesInitialState
  )

  const REGISTER_ENDPOINT = process.env.REACT_APP_POST_ENDPOINT
  const token = sessionStorage.getItem("token")
  const formRef = React.createRef<FormInstance>()

  const setHiddenFieldValue = () => {
    if (formRef.current && addressCoordinates)
      formRef.current.setFieldsValue({ hidden_input: "hidden_input" })
  }

  const onFinish = (data: any) => {
    if (REGISTER_ENDPOINT)
      axios
        .post(
          REGISTER_ENDPOINT,
          {
            name: data.object_name,
            city: data.object_city,
            address: data.object_address,
            category: data.object_type,
            lat: addressCoordinates.latLng.lat,
            lng: addressCoordinates.latLng.lng,
            published_at: null,
            hidden_input: data.hidden_input,
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
  }

  const onFinishFailed = () => {
    setStatus("Coś poszło nie tak, spróbuj ponownie")
  }

  const renderOptionsCategoryOptions = (): ReactNode => {
    const name = process.env.REACT_APP_NAME
    const cat = process.env.REACT_APP_CAT
    const { categories } = useContext(GlobalContext)
    const { Option } = Select

    return categories.map((category: { [x: string]: never }) => {
      return (
        <Option key={category[`${name}`]} value={category[`${cat}`]}>
          {category[`${cat}`]}
        </Option>
      )
    })
  }

  const mapInputLabel = "Znajdź się na mapie\n(ulica, numer, miasto)"

  return (
    <>
      <Form
        {...layout}
        ref={formRef}
        name="post_object_form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Nazwa lokalu"
          labelAlign="left"
          name="object_name"
          rules={[
            { required: true, message: "Podaj nazwę lokalu!" },
            { max: 75, message: "Nazwa lokalu jest zbyt długa" },
            { min: 4, message: "Nazwa lokalu jest zbyt krótka" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Miasto"
          labelAlign="left"
          name="object_city"
          rules={[
            { required: true, message: "Podaj miasto" },
            { max: 50, message: "Nazwa miasta jest zbyt długa" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Potwierdź adres"
          labelAlign="left"
          name="object_address"
          rules={[
            { required: true, message: "Podaj adres" },
            { max: 100, message: "Adres jest zbyt długi" },
            { min: 6, message: "Adres jest zbyt krótki" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Kategoria"
          labelAlign="left"
          name="object_type"
          rules={[{ required: true, message: "Wybierz kategorię" }]}
        >
          <Select placeholder="Wybierz kategorię" allowClear>
            {renderOptionsCategoryOptions()}
          </Select>
        </Form.Item>
        <Form.Item
          label={mapInputLabel}
          labelAlign="left"
          name="hidden_input"
          rules={[{ required: true, message: "Wskaż swój punkt na mapie" }]}
        >
          <Input />
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
                setHiddenFieldValue()
              }}
              position="topleft"
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
        </Form.Item>
        <Form.Item>
          <div className="error-wrapper">{status}</div>
          <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
            Dodaj
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default PostObjectForm
