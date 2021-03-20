import React from "react"
import "leaflet/dist/leaflet.css"
import { Marker, Popup } from "react-leaflet"
import { MarkerType } from "../../types/types"
import styled from "styled-components"
import { colors } from "../../utils/colors"

const MarkerTitle = styled.h3`
  font-size: 16px;
`
const MarkerCategory = styled.div`
  font-size: 14px;
  color: ${colors.grey};
`
const MarkerDescription = styled.div`
  font-size: 14px;
`

const MapMarker: React.VFC<MarkerType> = ({
  ln,
  lt,
  icon,
  name,
  cat,
  address,
}): JSX.Element => {
  return (
    <Marker position={[ln, lt]} icon={icon}>
      <Popup>
        <MarkerTitle>{name}</MarkerTitle>
        <MarkerCategory>{cat}</MarkerCategory>
        <MarkerDescription>{address}</MarkerDescription>
      </Popup>
    </Marker>
  )
}

export default MapMarker
