import React, { useContext } from "react"
import { GlobalContext } from "../store"
import { ObjectsType } from "../types/types"
import { LoaderContainer } from "../utils/styled-components"
import Loader from "../components/map/Loader"
import "leaflet/dist/leaflet.css"
import { Map, Marker, TileLayer } from "react-leaflet"
import MapMarker from "../components/map/MapMarker"
import L from "leaflet"
import pinBar from "../assets/icons/pin-bar.svg"
import pinRestaurant from "../assets/icons/pin-restaurant.svg"
import pinFitness from "../assets/icons/pin-fit.svg"
import pinBeauty from "../assets/icons/pin-beauty.svg"
import pinHotel from "../assets/icons/pin-hotel.svg"
import pinOther from "../assets/icons/pin-other.svg"

const MapUI = (): JSX.Element => {
  const { mapObjects } = useContext(GlobalContext)
  const lat = process.env.REACT_APP_LAT
  const lng = process.env.REACT_APP_LNG
  const name = process.env.REACT_APP_NAME
  const cat = process.env.REACT_APP_CAT
  const address = process.env.REACT_APP_ADDRESS
  const type_1 = process.env.REACT_APP_TYPE_1
  const type_2 = process.env.REACT_APP_TYPE_2
  const type_3 = process.env.REACT_APP_TYPE_3
  const type_4 = process.env.REACT_APP_TYPE_4
  const type_5 = process.env.REACT_APP_TYPE_5

  const setIcon = (iconDir: string) => {
    return new L.Icon({
      iconUrl: iconDir,
      iconRetinaUrl: iconDir,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
      className: "leaflet-pin-icon",
    })
  }

  return (
    <>
      {mapObjects.length > 0 || mapObjects === [] ? null : (
        <LoaderContainer data-testid="loader-test-id">
          <Loader />
        </LoaderContainer>
      )}
      <Map
        center={[52.20386307153011, 19.137394372476308]}
        zoom={7}
        scrollWheelZoom
        zoomControl={false}
        dragging
        attributionControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        />

        <div>
          {mapObjects.map((object: ObjectsType) => {
            const iconType =
              object.category === type_1
                ? setIcon(pinBar)
                : object.category === type_2
                ? setIcon(pinRestaurant)
                : object.category === type_3
                ? setIcon(pinFitness)
                : object.category === type_4
                ? setIcon(pinBeauty)
                : object.category === type_5
                ? setIcon(pinHotel)
                : setIcon(pinOther)

            return (
              <MapMarker
                key={object.id}
                id={object.id}
                lat={object[`${lat}`]}
                lng={object[`${lng}`]}
                icon={iconType}
                name={object[`${name}`]}
                cat={object[`${cat}`]}
                address={object[`${address}`]}
              />
            )
          })}
        </div>
      </Map>
    </>
  )
}

export default MapUI
