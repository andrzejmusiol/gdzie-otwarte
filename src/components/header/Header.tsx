import React from 'react'
import logo from '../../assets/icons/logo.svg'
import styled from "styled-components"

const LogoContainer = styled.div`
    padding: 10px 20px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    img {
        width: 20px;
        height: auto;
        display: inline-block;
    }
`

const Header = (): JSX.Element => (
  <LogoContainer>
      <img src={logo} alt="Logo" />
  </LogoContainer>
)

export default Header
