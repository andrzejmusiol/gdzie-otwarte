import React, {ReactNode, useContext} from "react"
import {GlobalContext} from "../store"
import {Select} from "antd"
import {cat, name} from "./constans"

export const generateNumbers = (): number => Math.floor(Math.random() * 20) + 1

export const renderOptionsCategoryOptions = (): ReactNode => {
    const { categories } = useContext(GlobalContext)
    const { Option } = Select

    return categories.map((category: { [x: string]: never }) => {
        return (
            <Option key={category[`${name}`]} value={category[`${cat}`]}>
            {category[`${cat}`]}
            </Option>
    )
    })
}

export const showModal = (
    modalMethod: (value: ((prevState: boolean) => boolean) | boolean) => void
): void => {
    modalMethod(true)
}
export const hideModal = (
    modalMethod: (value: ((prevState: boolean) => boolean) | boolean) => void
): void => {
    modalMethod(false)
}