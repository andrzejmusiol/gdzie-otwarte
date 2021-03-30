import { DivIcon, Icon, IconOptions } from "leaflet"

export interface ButtonTypes {
  text: string
}

export interface ObjectsType {
  main: string
  [key: string]: any
}

export interface MarkerType {
  id: number
  ln: number
  lt: number
  icon: Icon<IconOptions> | DivIcon | undefined
  name: string
  cat: string
  address: string
}

export interface LegendCircleType {
  background: string
  name: string
}

export interface FormValues {
  name: string
  email: string
  password: string
}
export interface PostFormValues {
  object_name: string
  object_address: string
  object_city: string
  object_type: string
}
