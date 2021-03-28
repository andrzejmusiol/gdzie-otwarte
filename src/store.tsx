import React, { useEffect, useState } from "react"
import axios from "axios"

const GlobalContext: React.Context<any> = React.createContext({})

interface ChildrenPropsType {
  children: JSX.Element[] | JSX.Element
}

const ContextProvider: React.FC<ChildrenPropsType> = ({
  children,
}): JSX.Element => {
  const [mapObjects, setMapObjects] = useState([])
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    const url: string | undefined = process.env.REACT_APP_OBJECTS_API_ENDPOINT
    if (url)
      axios.get(url).then((response) => {
        setMapObjects(response.data)
      })
  }, [])

  return (
    <GlobalContext.Provider value={{
      mapObjects,
      auth,
      setAuth
    }}>{children}</GlobalContext.Provider>
  )
}

export { GlobalContext, ContextProvider }
