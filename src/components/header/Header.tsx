import React from "react"
import logo from "../../assets/icons/logo.svg"
import { Link } from "react-router-dom"
import { colors } from "../../utils/colors"
import {
  HeaderContainer,
  LogoWrapper,
  LinksWrapper,
} from "../../utils/styled-components"
import LegendCircle from "../map/LegendCircle"

const theme = {
  bar: colors.bar,
  restaurant: colors.restaurant,
  fit: colors.fit,
  other: colors.other,
}

const Header = (): JSX.Element => (
  <HeaderContainer>
    <LogoWrapper>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </LogoWrapper>
    <LinksWrapper>
      <Link to="/logowanie">Logowanie</Link>
      <Link to="/rejestracja">Dodaj punkt</Link>
    </LinksWrapper>
  </HeaderContainer>
)

export default Header
