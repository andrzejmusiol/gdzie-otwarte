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
