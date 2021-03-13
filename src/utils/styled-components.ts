import styled from "styled-components"
import {colors} from "./colors"

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
        height: auto
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