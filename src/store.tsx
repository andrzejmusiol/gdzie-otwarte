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
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const objectsUrl: string | any = process.env.REACT_APP_OBJECTS_API_ENDPOINT
    const categoriesUrl: string | any =
      process.env.REACT_APP_CATEGORIES_API_ENDPOINT
    const objectRequest = axios.get(objectsUrl)
    const categoriesRequest = axios.get(categoriesUrl)

    if (objectsUrl)
      axios.all([objectRequest, categoriesRequest]).then(
        axios.spread((...responses) => {
          setMapObjects(responses[0].data)
          setCategories(responses[1].data)
        })
      )
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        mapObjects,
        setMapObjects,
        categories,
        setCategories,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, ContextProvider }
