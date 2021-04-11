import React from "react"
import { PostForm } from "../utils/styled-components"
import PostObjectForm from "../components/dashboard/PostObjectForm"
import { Link, Route } from "react-router-dom"

import { Layout, Menu } from "antd"
import {
  addObject,
  addPointHeaderText,
  addPointSubHeaderText,
  hello,
  yourAccount,
} from "../utils/messages"

const { Content, Sider } = Layout

const Dashboard = (): JSX.Element => {
  const auth = Boolean(sessionStorage.getItem("auth"))
  const userOFSession = sessionStorage.getItem("user")
  let user

  if (typeof userOFSession === "string") {
    user = JSON.parse(userOFSession)
  }

  return (
    <Layout style={{ margin: "50px 20px" }}>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="1">
              <Link to="/panel-klienta/dodaj-punkt">{addObject}</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/panel-klienta/twoje-konto">{yourAccount}</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <PostForm>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Route path="/panel-klienta/dodaj-punkt">
                <h1>{addPointHeaderText}</h1>
                <p>{addPointSubHeaderText}</p>
                <PostObjectForm />
              </Route>
              <Route path="/panel-klienta/twoje-konto">
                {typeof userOFSession === "string" && auth ? (
                  <h2>
                    {hello}
                    {user.username}
                  </h2>
                ) : (
                  ""
                )}
              </Route>
            </Content>
          </PostForm>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Dashboard
