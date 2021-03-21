import React, { useContext, useEffect, useState } from "react"
import { MapStore } from "../store"
import { ObjectsType } from "../types/types"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer } from "react-leaflet"
import MapMarker from "../components/map/MapMarker"
import L from "leaflet"
import pinBar from "../assets/icons/pin-bar.svg"
import pinRestaurant from "../assets/icons/pin-other.svg"
import pinFitness from "../assets/icons/pin-other.svg"
import pinOther from "../assets/icons/pin-restaurant.svg"

const setIcon = (iconDir: string) => {
  return new L.Icon({
    iconUrl: iconDir,
    iconRetinaUrl: iconDir,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    className: "leaflet-pin-icon",
  })
}

const Map = (): JSX.Element => {
  const { mapObjects } = useContext(MapStore)
  const ln = process.env.REACT_APP_LN
  const lt = process.env.REACT_APP_LT
  const name = process.env.REACT_APP_NAME
  const cat = process.env.REACT_APP_CAT
  const address = process.env.REACT_APP_ADDRESS
  const type_1 = process.env.REACT_APP_TYPE_1
  const type_2 = process.env.REACT_APP_TYPE_2
  const type_3 = process.env.REACT_APP_TYPE_3

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
          const iconType =
              object.kategoria === type_1
                  ? setIcon(pinBar)
                  : object.kategoria === type_2
                  ? setIcon(pinRestaurant)
                  : object.kategoria === type_3
                  ? setIcon(pinFitness)
                  : setIcon(pinOther)

          return (
            <MapMarker
              key={object.id}
              id={object.id}
              ln={object[`${ln}`]}
              lt={object[`${lt}`]}
              icon={iconType}
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
