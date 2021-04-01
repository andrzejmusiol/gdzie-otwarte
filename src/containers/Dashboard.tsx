import React, { useContext, useEffect, useState } from "react"
import Header from "../components/header/Header"
import { PostForm } from "../utils/styled-components"
import PostObjectForm from "../components/dashboard/PostObjectForm"
import { GlobalContext } from "../store"
import { Link } from "react-router-dom"

const Dashboard = (): JSX.Element => {
  const { user } = useContext(GlobalContext)

  return (
    <PostForm>
      <Header />
      <div className="post-left-side">
        {user ? <h2>Witaj! {user.username}</h2> : ""}
        <Link to="/dodaj-punkt">Dodaj punkt</Link>
        <Link to="/reset-hasla">Resetuj hasło</Link>
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
