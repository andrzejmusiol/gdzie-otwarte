import React, {useEffect, useState} from "react"
import { ObjectsType } from "../types/types"
import axios from 'axios'
import "leaflet/dist/leaflet.css"
import { MapContainer , TileLayer, Marker, Popup } from 'react-leaflet'

const Map = (): JSX.Element => {
    const [mapObjects, setMapObjects] = useState([])
    const ln = process.env.REACT_APP_LN
    const lt = process.env.REACT_APP_LT
    const name = process.env.REACT_APP_NAME
    const desc = process.env.REACT_APP_DESC

    useEffect(() => {
        const url: string | undefined = process.env.REACT_APP_OBJECTS_API_ENDPOINT
        if (url)
            axios.get(url).then(response => {
                setMapObjects(response.data)
            })
    }, [])

  return (
      <MapContainer center={[52.20386307153011, 19.137394372476308]} zoom={7} scrollWheelZoom>
          <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <div>{mapObjects.map((object: ObjectsType) => {
              return (
                  <Marker key={object.id} position={[object[`${ln}`], object[`${lt}`]]}>
                      <Popup>
                          {object[`${name}`]}
                          {object[`${desc}`]}
                      </Popup>
                  </Marker>
              )

          })}</div>

      </MapContainer>
  )
}

export default Map
