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

import { Button, Col, Row, Tooltip } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import { addObject, signIn } from "../../utils/messages"

const renderFiltersCategoryOptions = () => {
  const cat = process.env.REACT_APP_CAT
  const { categories } = useContext(GlobalContext)
  const categoriesArray: { value: string; label: string }[] = []

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

  const onReset = () => {
    window.location.reload()
  }

  return (
    <Row>
      <HeaderContainer>
        <Col xl={8} md={5}>
          <LogoWrapper>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </LogoWrapper>
        </Col>
        <Col xl={8} md={10}>
          {location.pathname === "/map" ? (
            <FilterWrapper>
              <Filter
                options={renderFiltersCategoryOptions()}
                placeholder={process.env.REACT_APP_PLACEHOLDER_2}
              />
              <Tooltip title="Resetuj filtry">
                <Button onClick={onReset} type="primary" shape="circle">
                  X
                </Button>
              </Tooltip>
            </FilterWrapper>
          ) : null}
        </Col>
        <Col xl={8} md={9}>
          {location.pathname === "/rejestracja" ||
          location.pathname === "/logowanie" ? null : (
            <LinksWrapper>
              {!auth && !loginStorage ? (
                <>
                  <Link to="/logowanie">{signIn}</Link>
                  <Button
                    style={{ marginLeft: "10px" }}
                    type="primary"
                    icon={<PlusOutlined />}
                  >
                    <Link to="/rejestracja">{addObject}</Link>
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/panel-klienta">
                    <Button type="primary" icon={<PlusOutlined />}>
                      {addObject}
                    </Button>
                  </Link>
                  <LogoutButton onClick={handleLogout}>Wyloguj</LogoutButton>
                </>
              )}
            </LinksWrapper>
          )}
        </Col>
      </HeaderContainer>
    </Row>
  )
}

export default Header
