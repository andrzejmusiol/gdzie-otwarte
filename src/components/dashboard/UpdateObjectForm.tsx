import React, { useState } from "react"
import axios from "axios"
import { Map, TileLayer, Circle } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import Search from "react-leaflet-search"
import { Form, Input, Button, Select } from "antd"
import { SaveOutlined } from "@ant-design/icons"
import { FormInstance } from "antd/lib/form"
import { messages } from "../../utils/messages"
import {renderOptionsCategoryOptions} from "../../utils/utils"
import {OBJECT_PUT_ENDPOINT} from "../../utils/constans"

interface UpdateObjectType {
  editingObjectId: number | undefined
  setIsEditingModalVisible: (
    value: ((prevState: boolean) => boolean) | boolean
  ) => void
}

const UpdateObjectForm = ({
  editingObjectId,
  setIsEditingModalVisible,
}: UpdateObjectType): JSX.Element => {
  const layout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 24 },
      lg: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 24 },
      lg: { span: 24 },
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


  const token = sessionStorage.getItem("token")
  const formRef = React.createRef<FormInstance>()

  const setHiddenFieldValue = () => {
    if (formRef.current && addressCoordinates)
      formRef.current.setFieldsValue({ hidden_input: "hidden_input" })
  }

  const onFinish = (data: any) => {
    if (OBJECT_PUT_ENDPOINT)
      axios
        .put(
          `${OBJECT_PUT_ENDPOINT}/${editingObjectId}`,
          {
            name: data.object_name,
            city: data.object_city,
            address: data.object_address,
            category: data.object_type,
            website: data.object_website,
            phone: data.object_phone,
            lat: addressCoordinates.latLng.lat,
            lng: addressCoordinates.latLng.lng,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          window.location.reload()
        })
        .catch(() => {
          setStatus(messages.axios.axiosFailure)
        })
  }

  const onFinishFailed = () => {
    setStatus(messages.axios.formFailure)
  }

  return (
    <>
      <Form
        {...layout}
        ref={formRef}
        name="post_object_form"
        className="update-object-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Nazwa lokalu"
          labelAlign="left"
          name="object_name"
          rules={[
            { max: 75, message: messages.forms.maxObjectMessage },
            { min: 4, message: messages.forms.minObjectMessage },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Miasto"
          labelAlign="left"
          name="object_city"
          rules={[{ max: 50, message: messages.forms.maxCityMessage }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Ulica i numer"
          labelAlign="left"
          name="object_address"
          rules={[
            { max: 100, message: messages.forms.maxAddressMessage },
            { min: 6, message: messages.forms.minAddressMessage },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Kategoria" labelAlign="left" name="object_type">
          <Select placeholder="Wybierz kategorię" allowClear>
            {renderOptionsCategoryOptions()}
          </Select>
        </Form.Item>
        <Form.Item
          label="Strona www (z https://)"
          labelAlign="left"
          name="object_website"
          rules={[
            { message: messages.forms.basicAddressMessage },
            { max: 50, message: messages.forms.maxAddressMessage },
            { min: 5, message: messages.forms.minAddressMessage },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Telefon (+48 123 456 789)"
          labelAlign="left"
          name="object_phone"
          rules={[
            { message: messages.forms.basicAddressMessage },
            { max: 15, message: messages.forms.maxAddressMessage },
            { min: 9, message: messages.forms.minAddressMessage },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={messages.forms.mapInputLabel}
          labelAlign="left"
          name="hidden_input"
        >
          <Input className="hidden-input" />
          <Map
            center={[52.20386307153011, 19.137394372476308]}
            zoom={7}
            className="form-map"
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
                  radius={10}
                />
              )}
            </Search>
          </Map>
        </Form.Item>
        <Form.Item>
          <div className="error-wrapper">{status}</div>
          <Button
            type="primary"
            htmlType="submit"
            icon={<SaveOutlined />}
            style={{ margin: 10 }}
          >
            Zapisz
          </Button>
          <Button
            type="primary"
            onClick={() => setIsEditingModalVisible(false)}
            danger
            style={{ margin: 10 }}
          >
            Anuluj
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default UpdateObjectForm
