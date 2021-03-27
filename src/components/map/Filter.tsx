import React from "react"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Select, { components } from 'react-select'
import { FilterWrapper, Circle } from '../../utils/styled-components'
import {colors} from "../../utils/colors"

interface FilterType {
    options: { value: string; label: string; }[]
    placeholder: string | undefined
}

const Filter: React.VFC<FilterType> = ({options, placeholder}): JSX.Element => {
    const style = {
        option: () => ({
            color: colors.grey,
            fontSize: 14,
            padding: 10
        }),
        control: () => ({
            minWidth: 200,
            background: colors.lightBlue,
            display: 'flex',
            borderRadius: 3
        }),
        singleValue: () => ({
            fontSize: 14,
        }),
    }
    return (
        <FilterWrapper>
            <Circle/>
            <Select styles={style} options={options} placeholder={placeholder}/>
        </FilterWrapper>
    )
}

export default Filter
