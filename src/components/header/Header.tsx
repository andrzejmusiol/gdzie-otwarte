import React, { useContext } from "react"
import logo from "../../assets/icons/logo.svg"
import { Link, useHistory } from "react-router-dom"
import { useLocation } from "react-router-dom"
import {
  HeaderContainer,
  LogoWrapper,
  LinksWrapper,
  FilterWrapper,
  LogoutButton,
} from "../../utils/styled-components"
import Filter from "../map/Filter"
import { GlobalContext } from "../../store"
import voivodeships from "../../utils/voivodeships.json"
import Cookie from "js-cookie"

const renderFiltersCategoryOptions = () => {
  const cat = process.env.REACT_APP_CAT
  const { categories } = useContext(GlobalContext)
  const categoriesArray: { value: never; label: never }[] = []

  categories.map((category: { [x: string]: never }) => {
    const structure = { value: category[`${cat}`], label: category[`${cat}`] }
    categoriesArray.push(structure)
  })

  return categoriesArray
}

const Header = (): JSX.Element => {
  const location = useLocation()
  const auth = Boolean(sessionStorage.getItem("auth"))
  const loginStorage = sessionStorage.getItem("token")
  const history = useHistory()

  const handleLogout = () => {
    Cookie.remove("token")
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("auth")
    sessionStorage.removeItem("user")
    history.push("/map")
  }

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
      {location.pathname === "/rejestracja" ||
      location.pathname === "/logowanie" ? null : (
        <LinksWrapper>
          {!auth && !loginStorage ? (
            <>
              <Link to="/logowanie">Logowanie</Link>
              <Link to="/rejestracja">Dodaj punkt</Link>
            </>
          ) : (
            <>
              <Link to="/dodaj-punkt">Dodaj punkt</Link>
              <LogoutButton onClick={handleLogout}>Wyloguj</LogoutButton>
            </>
          )}
        </LinksWrapper>
      )}
    </HeaderContainer>
  )
}

export default Header
