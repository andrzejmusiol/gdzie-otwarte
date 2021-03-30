import React, { useContext, useEffect, useState } from "react"
import Header from "../components/header/Header"
import { PostForm } from "../utils/styled-components"
import PostObjectForm from "../components/forms/PostObjectForm"
import { GlobalContext } from "../store"

const Dashboard = (): JSX.Element => {
  const { user } = useContext(GlobalContext)

  return (
    <PostForm>
      <Header />
      <div className="post-left-side">
          {user ?  <h2>Witaj! {user.username}</h2> : ''}
        <h2>Twoje punkty</h2>
      </div>
      <div className="post-right-side">
        <h1>Dodaj punkt na mapie</h1>
        <p>i pozwól klientom Cię zauważyć!</p>
        <PostObjectForm />
      </div>
    </PostForm>
  )
}

export default Dashboard
