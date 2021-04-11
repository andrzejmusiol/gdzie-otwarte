import React, { useContext, useState } from "react"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Select, { components } from "react-select"
import { FilterWrapper, Circle } from "../../utils/styled-components"
import { colors } from "../../utils/colors"
import axios from "axios"
import { GlobalContext } from "../../store"
import { useWindowDimensions } from "../../hooks/hooks"

interface FilterType {
  options: { value: string; label: string }[]
  placeholder: string | undefined
}

const Filter: React.VFC<FilterType> = ({
  options,
  placeholder,
}): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState()
  const { setMapObjects } = useContext(GlobalContext)
  const { width } = useWindowDimensions()
  const objectsUrl: string | any = process.env.REACT_APP_OBJECTS_API_ENDPOINT

  const setObjectsFilter = (url: string) => {
    axios.get(url).then((response) => {
      response.data.length > 0 ? setMapObjects(response.data) : []
    })
  }

  const handleChange = (e: { value: React.SetStateAction<undefined> }) => {
    setSelectedValue(e.value)

    if (selectedValue !== "") {
      setObjectsFilter(`${objectsUrl}?category=${e.value}`)
    } else {
      window.location.reload()
    }
  }

  const style = {
    option: () => ({
      color: colors.grey,
      fontSize: 14,
      padding: 10,
    }),
    control: () => ({
      minWidth: 200,
      background: colors.lightBlue,
      display: "flex",
      borderRadius: 3,
    }),
    singleValue: () => ({
      fontSize: 14,
    }),
  }
  return (
    <FilterWrapper className="filter-select">
      {width > 768 ? <Circle /> : null}
      <Select
        styles={style}
        options={options}
        placeholder={placeholder}
        value={options.find((obj) => obj.value === selectedValue)}
        onChange={handleChange}
      />
    </FilterWrapper>
  )
}

export default Filter
