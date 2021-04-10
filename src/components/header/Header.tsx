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

import { Button } from "antd"
import { PlusOutlined } from "@ant-design/icons"

const renderFiltersCategoryOptions = () => {
  const cat = process.env.REACT_APP_CAT
  const { categories } = useContext(GlobalContext)
  const categoriesArray: { value: string; label: string }[] = [
    { value: "", label: "Wszystkie" },
  ]

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
              <Button
                style={{ marginLeft: "10px" }}
                type="primary"
                icon={<PlusOutlined />}
              >
                <Link to="/rejestracja">Dodaj punkt </Link>
              </Button>
            </>
          ) : (
            <>
              <Link to="/panel-klienta">
                <Button type="primary" icon={<PlusOutlined />}>
                  Dodaj punkt
                </Button>
              </Link>
              <LogoutButton onClick={handleLogout}>Wyloguj</LogoutButton>
            </>
          )}
        </LinksWrapper>
      )}
    </HeaderContainer>
  )
}

export default Header
