import styled from "styled-components"
import { colors } from "./colors"

export const LeftSide = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const WelcomeWrapper = styled.div`
  text-align: center;
  .main-wrapper {
    padding: 50px 20px;
    @media (max-width: 600px) {
      padding: 100px 20px;
    }
  }
  .info-wrapper {
    max-width: 30rem;
  }
  h1 {
    font-size: 3vw;
    @media (max-width: 600px) {
      font-size: 36px;
    }
  }
  img {
    width: 20px;
    height: auto;
    display: inline-block;
    margin-top: 30px;
  }
  .welcome-image {
    width: 50%;
    height: auto;
  }
`

export const HowItWorksWrapper = styled.div`
  text-align: center;
  .how-it-works-wrapper {
    padding: 30px 20px;
    @media (max-width: 600px) {
      padding: 30px 20px;
    }
  }
  .ant-steps {
    padding: 30px 0;
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
  display: flex;
  align-items: center;
  img {
    width: 150px;
    height: auto;
    display: inline-block;
    margin-top: 5px;
  }
  div {
    display: inline-block;
    color: ${colors.grey};
    font-size: 12px;
    margin: 8px 5px 5px 10px;
  }
`

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: ${colors.blue};
  margin-right: 10px;
`

export const MobileHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`

export const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 10px;
  cursor: pointer;
`

export const MobileFilterWrapper = styled.div`
  margin: 20px 0;
  cursor: pointer;
  .filter-select {
    margin: 0 0 20px 0;
    border: 1px solid ${colors.grey};
  }
`

export const LinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  a {
    color: ${colors.grey};
    text-decoration: none;
    display: inline-block;
    margin-left: 20px;
    font-size: 14px;
    &: hover {
      color: ${colors.blue};
      transition: 0.3s ease;
    }
  }
  a:nth-child(2) {
    color: ${colors.white};
  }
`

export const MobileLinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  padding: 20px 0;
  button {
    margin-top: 20px;
  }
  a {
    color: ${colors.grey};
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    width: 100%;
    &: hover {
      color: ${colors.blue};
      transition: 0.3s ease;
    }
  }
  a:nth-child(2) {
    color: ${colors.white};
  }
`

export const SignInUpForm = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-center;
  align-items: center;
  flex-wrap: wrap;
  .sign-in-up-left-side,
  .sign-in-up-right-side {
    width: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 600px) {
      width: 100%;
    }
  }
  .sign-in-up-right-side {
    @media (max-width: 600px) {
      display: none;
    }
  }
  h1,
  p {
    width: 100%;
    font-weight: 700;
  }
  h1 {
    font-size: 2rem;
  }
  form {
    margin-top: 20px;
    max-width: 500px;
  }

  .error-wrapper {
    width: 100%;
    color: ${colors.red};
    font-size: 18px;
    font-weight: 700;
    text-align: left;
    margin-bottom: 20px;
  }
`
export const LogoutButton = styled.div`
  text-transform: uppercase;
  color: ${colors.blue};
  border: none;
  margin-left: 10px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    color: ${colors.grey};
  }
`

export const PostForm = styled.div`
  h1 {
    font-size: 24px;
    font-weight: 700;
  }
  p {
    width: 100%;
    font-size: 18px;
  }
  label {
    font-size: 14px;
    color: ${colors.grey};
    font-weight: 600;
  }
  .hidden-input {
    visibility: hidden;
    height: 0;
    width: 0;
    position: absolute;
    left: -1000px;
  }
  .error-wrapper {
    width: 100%;
    color: ${colors.red};
    font-size: 18px;
    font-weight: 700;
    text-align: left;
    margin-bottom: 20px;
  }
  .search-control-wrap input,
  .search-control-wrap select,
  .search-control-wrap option {
    padding: 10px;
    border: 1px solid ${colors.grey};
    margin: 10px 0;
    border-radius: 3px;
    width: 100%;
  }
  .search-control {
    width: 100%;
  }
  .search-control-icon-button,
  .leaflet-control-zoom {
    display: none;
  }
  .search-control-input {
    margin: 10px;
  }
  .leaflet-search-wrap.leaflet-control {
    width: 300px;
    margin: 0;
  }
  .search-control-wrap {
    box-shadow: none;
    width: 100%;
  }
`

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Spinner = styled.div`
  margin: 0 0 2em;
  height: 100px;
  width: 20%;
  text-align: center;
  padding: 1em;
  margin: 0 auto 1em;
  display: inline-block;
  vertical-align: top;
  svg path,
  svg rect {
    fill: ${colors.blue};
  }
`
