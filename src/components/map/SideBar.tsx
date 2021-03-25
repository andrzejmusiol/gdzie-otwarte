import LegendCircle from "./LegendCircle"
import {
  LegendCircleWrapper,
  SidebarWrapper,
} from "../../utils/styled-components"
import React from "react"
import { colors } from "../../utils/colors"

const theme = {
  bar: colors.bar,
  restaurant: colors.restaurant,
  fit: colors.fit,
  beauty: colors.beauty,
  other: colors.other,
}

const SideBar = (): JSX.Element => (
  <SidebarWrapper>
    <h3>Filtruj</h3>
    <LegendCircle background={theme.bar} name="Bar" />
    <LegendCircle background={theme.restaurant} name="Restauracja" />
    <LegendCircle background={theme.fit} name="Fitness" />
    <LegendCircle background={theme.beauty} name="Beauty" />
    <LegendCircle background={theme.other} name="Inne" />
  </SidebarWrapper>
)

export default SideBar
