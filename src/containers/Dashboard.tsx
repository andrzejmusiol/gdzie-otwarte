import React from "react"
import { PostForm } from "../utils/styled-components"
import PostObjectForm from "../components/dashboard/PostObjectForm"
import { Route } from "react-router-dom"

import { Layout } from "antd"
import { messages } from "../utils/messages"

import DashboardNav from "../components/dashboard/DashboardNav"

const { Content } = Layout

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
        <DashboardNav />
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
                <h1>{messages.site.addPointHeaderText}</h1>
                <p>{messages.site.addPointSubHeaderText}</p>
                <PostObjectForm />
              </Route>
              <Route path="/panel-klienta/twoje-konto">
                {typeof userOFSession === "string" && auth ? (
                  <h2>
                    {messages.account.hello}
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
