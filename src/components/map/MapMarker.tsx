import React from "react"
import "leaflet/dist/leaflet.css"
import { Marker, Popup } from "react-leaflet"
import { LatLngExpression } from "leaflet"

const Map = (position: LatLngExpression): JSX.Element => {
  return (
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  )
}

export default Map
