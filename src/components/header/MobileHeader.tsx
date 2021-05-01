import React, { useContext, useState } from "react"
import logo from "../../assets/icons/logo.svg"
import { Link, useHistory } from "react-router-dom"
import { useLocation } from "react-router-dom"
import {
  LogoWrapper,
  MobileLinksWrapper,
  MobileFilterWrapper,
  LogoutButton,
  MobileHeaderWrapper,
} from "../../utils/styled-components"
import Filter from "../map/Filter"
import { GlobalContext } from "../../store"

import { Button, Drawer, Tooltip } from "antd"
import { PlusOutlined, MenuOutlined } from "@ant-design/icons"
import { messages } from "../../utils/messages"

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

const MobileHeader = (): JSX.Element => {
  const location = useLocation()
  const [visible, setVisible] = useState(false)
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

  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }

  return (
    <MobileHeaderWrapper>
      <LogoWrapper>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <div>Beta</div>
      </LogoWrapper>
      {location.pathname === "/rejestracja" ||
      location.pathname === "/logowanie" ? null : (
        <Button type="link" onClick={showDrawer} icon={<MenuOutlined />} />
      )}
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <LogoWrapper>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </LogoWrapper>

        {location.pathname === "/map" ? (
          <MobileFilterWrapper>
            <Filter
              options={renderFiltersCategoryOptions()}
              placeholder={process.env.REACT_APP_PLACEHOLDER_2}
            />
            <Tooltip title="Resetuj filtry">
              <Button onClick={onReset} type="primary" shape="circle">
                X
              </Button>
            </Tooltip>
          </MobileFilterWrapper>
        ) : null}

        {location.pathname === "/rejestracja" ||
        location.pathname === "/logowanie" ? null : (
          <MobileLinksWrapper>
            {!auth && !loginStorage ? (
              <>
                <Link to="/logowanie">Logowanie</Link>
                <Button type="primary" icon={<PlusOutlined />}>
                  <Link to="/rejestracja">{messages.account.addObject}</Link>
                </Button>
              </>
            ) : (
              <>
                <Link to="/panel-klienta/dodaj-punkt">
                  <Button type="primary" icon={<PlusOutlined />}>
                    {messages.account.addObject}
                  </Button>
                </Link>
                <LogoutButton onClick={handleLogout}>
                  {messages.account.logOut}
                </LogoutButton>
              </>
            )}
          </MobileLinksWrapper>
        )}
      </Drawer>
    </MobileHeaderWrapper>
  )
}

export default MobileHeader
