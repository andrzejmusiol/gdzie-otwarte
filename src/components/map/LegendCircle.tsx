import React from "react"
import { Circle, LegendCircleWrapper } from "../../utils/styled-components"
import { LegendCircleType } from "../../types/types"

const LegendCircle: React.VFC<LegendCircleType> = ({
  background,
  name,
}): JSX.Element => {
  const style = {
    background: background,
  }
  return (
    <LegendCircleWrapper data-name={name}>
      <Circle style={style} />
      <div>{name}</div>
    </LegendCircleWrapper>
  )
}

export default LegendCircle
