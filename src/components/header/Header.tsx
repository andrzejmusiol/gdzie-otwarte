import React, { useContext } from "react"
import logo from "../../assets/icons/logo.svg"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import {
  HeaderContainer,
  LogoWrapper,
  LinksWrapper,
  FilterWrapper,
} from "../../utils/styled-components"
import Filter from "../map/Filter"
import { MapStore } from "../../store"
import voivodeships from "../../utils/voivodeships.json"

const renderFiltersCategoryOptions = () => {
  const cat = process.env.REACT_APP_CAT
  const { mapObjects } = useContext(MapStore)
  const categories: { value: never; label: never }[] = []

  mapObjects.map((object) => {
    const structure = { value: object[`${cat}`], label: object[`${cat}`] }
    categories.push(structure)
  })

  return categories
}

const Header = (): JSX.Element => {
  const location = useLocation()

  return (
    <HeaderContainer>
      <LogoWrapper>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </LogoWrapper>
      {location.pathname === "/map" ? (
        <FilterWrapper>
          <Filter
            options={voivodeships}
            placeholder={process.env.REACT_APP_PLACEHOLDER_1}
          />
          <Filter
            options={renderFiltersCategoryOptions()}
            placeholder={process.env.REACT_APP_PLACEHOLDER_2}
          />
        </FilterWrapper>
      ) : null}
      <LinksWrapper>
        <Link to="/logowanie">Logowanie</Link>
        <Link to="/rejestracja">Dodaj punkt</Link>
      </LinksWrapper>
    </HeaderContainer>
  )
}

export default Header
