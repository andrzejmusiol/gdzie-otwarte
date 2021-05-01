import React from "react"
import "leaflet/dist/leaflet.css"
import { Marker, Popup } from "react-leaflet"
import { MarkerType } from "../../types/types"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import { GlobalOutlined, PhoneOutlined } from "@ant-design/icons"

const MarkerTitle = styled.h3`
  font-size: 16px;
`
const MarkerCategory = styled.div`
  font-size: 14px;
  font-weight: 700;
`
const MarkerDescription = styled.div`
  font-size: 14px;
  color: ${colors.grey};
  margin: 5px 0;
`
const IconsWrapper = styled.div`
  display: inline-block;
  font-size: 20px;
  margin: 5px;
  a {
    color: ${colors.blue};
  }
`

const MapMarker: React.VFC<MarkerType> = ({
  lat,
  lng,
  icon,
  name,
  cat,
  website,
  phone,
  address,
  city,
}): JSX.Element => {
  const phoneLink = `tel:${phone}`

  return (
    <Marker position={[lat, lng]} icon={icon}>
      <Popup>
        <MarkerTitle>{name}</MarkerTitle>
        <MarkerCategory>{cat}</MarkerCategory>
        <MarkerDescription>{address}</MarkerDescription>
        <MarkerDescription>{city}</MarkerDescription>
        <IconsWrapper>
          <a href={website} target="_blank" rel="noreferrer">
            <GlobalOutlined />
          </a>
        </IconsWrapper>
        <IconsWrapper>
          <a href={phoneLink}>
            <PhoneOutlined />
          </a>
        </IconsWrapper>
      </Popup>
    </Marker>
  )
}

export default MapMarker
