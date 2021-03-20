import React, { useEffect, useState } from "react"
import { ObjectsType } from "../types/types"
import axios from "axios"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer } from "react-leaflet"
import MapMarker from "../components/map/MapMarker"
import L from "leaflet"
import pin from "../assets/icons/pin.svg"

const pinIcon = new L.Icon({
  iconUrl: pin,
  iconRetinaUrl: pin,
  iconSize: [30, 30],
  iconAnchor: [15, 15],
  className: "leaflet-pin-icon",
})

const Map = (): JSX.Element => {
  const [mapObjects, setMapObjects] = useState([])
  const ln = process.env.REACT_APP_LN
  const lt = process.env.REACT_APP_LT
  const name = process.env.REACT_APP_NAME
  const cat = process.env.REACT_APP_CAT
  const address = process.env.REACT_APP_ADDRESS

  useEffect(() => {
    const url: string | undefined = process.env.REACT_APP_OBJECTS_API_ENDPOINT
    if (url)
      axios.get(url).then((response) => {
        setMapObjects(response.data)
        console.warn(response.data)
      })
  }, [])

  return (
    <MapContainer
      center={[52.20386307153011, 19.137394372476308]}
      zoom={7}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <div>
        {mapObjects.map((object: ObjectsType) => {
          return (
            <MapMarker
              key={object.id}
              id={object.id}
              ln={object[`${ln}`]}
              lt={object[`${lt}`]}
              icon={pinIcon}
              name={object[`${name}`]}
              cat={object[`${cat}`]}
              address={object[`${address}`]}
            />
          )
        })}
      </div>
    </MapContainer>
  )
}

export default Map
