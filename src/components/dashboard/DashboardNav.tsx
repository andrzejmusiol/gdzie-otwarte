import React from "react"
import { Link } from "react-router-dom"

import { Layout, Menu } from "antd"
import { messages } from "../../utils/messages"
import { useWindowDimensions } from "../../hooks/hooks"
import { colors } from "../../utils/colors"

const { Sider, Header } = Layout

const DashboardNav = (): JSX.Element => {
  const { width } = useWindowDimensions()

  return (
    <>
      {width < 768 ? (
        <Header style={{ background: colors.white }}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="1">
              <Link to="/panel-klienta/dodaj-punkt">
                {messages.account.addObject}
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/panel-klienta/twoje-konto">
                {messages.account.yourAccount}
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
      ) : (
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="1">
              <Link to="/panel-klienta/dodaj-punkt">
                {messages.account.addObject}
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/panel-klienta/twoje-konto">
                {messages.account.yourAccount}
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
      )}
    </>
  )
}

export default DashboardNav
