import React from "react"
import { PostForm } from "../utils/styled-components"
import PostObjectForm from "../components/dashboard/PostObjectForm"
import { Route } from "react-router-dom"

import { Layout } from "antd"
import { messages } from "../utils/messages"

import DashboardNav from "../components/dashboard/DashboardNav"
import UserAccount from "../components/dashboard/UserAccount"

const { Content } = Layout

const Dashboard = (): JSX.Element => {
  const auth = Boolean(sessionStorage.getItem("auth"))
  const userOfSession = sessionStorage.getItem("user")

  let user

  if (typeof userOfSession === "string") {
    user = JSON.parse(userOfSession)
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
                {typeof userOfSession === "string" && auth ? (
                    <UserAccount user={user}/>
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
