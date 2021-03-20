import React, { ReactChild, useEffect, useState } from "react"
import axios from "axios"

const initialState = { mapObjects: [] }

const MapStore = React.createContext(initialState)

interface ChildrenPropsType {
  children: JSX.Element[] | JSX.Element
}

const MapStoreProvider: React.FC<ChildrenPropsType> = ({
  children,
}): JSX.Element => {
  const [mapObjects, setMapObjects] = useState([])

  useEffect(() => {
    const url: string | undefined = process.env.REACT_APP_OBJECTS_API_ENDPOINT
    if (url)
      axios.get(url).then((response) => {
        setMapObjects(response.data)
      })
  }, [])

  return (
    <MapStore.Provider value={{ mapObjects }}>{children}</MapStore.Provider>
  )
}

export { MapStore, MapStoreProvider }
