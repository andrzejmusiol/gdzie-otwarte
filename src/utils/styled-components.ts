import styled from "styled-components"
import { colors } from "./colors"

export const WelcomePageWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LeftSide = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RightSide = styled.div`
  width: 50%;
  img {
    width: 28vw;
    height: auto;
  }
`

export const TextContainer = styled.div`
    max-width: 450px;
    text-align: center;
    h1 {
        font-size: 3vw
    }
    h2 {
        font-size: 24px;
        color: ${colors.black}
    }
    p {
        font-size: 18px
        color: ${colors.black}
    }
`

export const HeaderContainer = styled.div`
  position: fixed;
  background: ${colors.white};
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 1001;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`

export const LogoWrapper = styled.div`
  img {
    width: 20px;
    height: auto;
    display: inline-block;
  }
`

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: ${colors.blue};
  margin-right: 10px;
`

export const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 10px;
  cursor: pointer;
`

export const LinksWrapper = styled.div`
  a {
    color: ${colors.grey};
    text-decoration: none;
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
    &: hover {
      color: ${colors.blue};
      transition: 0.3s ease;
    }
  }
  a:nth-child(2) {
    color: ${colors.white};
    background: ${colors.blue};
    padding: 10px 15px;
    border-radius: 5px;
    &: hover {
      box-shadow: 0 0 20px rgba(0, 69, 218, 0.5);
      transition: 0.3s ease;
    }
  }
`

export const Button = styled.button`
  padding: 10px 20px;
  text-transform: uppercase;
  color: ${colors.white};
  background: ${colors.blue};
  border: none;
  border-radius: 5px;
  padding: 24px 80px;
  font-size: 24px;
  margin: 20px 0;
  cursor: pointer;
  &: hover {
    box-shadow: 0 10px 30px rgba(0, 69, 218, 0.4);
    transition: 0.3s ease;
  }
`
