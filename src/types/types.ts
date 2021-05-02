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
  lat: number
  lng: number
  icon: Icon<IconOptions> | DivIcon | undefined
  name: string
  cat: string
  website: string
  phone: number
  address: string
  city: string
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

export interface windowDimensions {
  width: number
}

interface UserRole {
  description: string
  id: number
  name: string
  type: string
}

interface UserType {
  blocked: boolean
  confirmed: boolean
  created_at: string
  email: string
  id: number
  provider: string
  role: UserRole
  updated_at: string
  username: string
}

export interface User {
  user: UserType
}
