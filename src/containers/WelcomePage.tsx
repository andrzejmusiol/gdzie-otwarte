import React from "react"
import Header from "../components/header/Header"
import startImage from "../assets/icons/meditation.svg"
import {
  WelcomePageWrapper,
  LeftSide,
  TextContainer,
  RightSide,
} from "../utils/styled-components"
import BlueButton from "../components/buttons/BlueButton"
import { Link } from "react-router-dom"

const WelcomePage = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <WelcomePageWrapper>
        <LeftSide>
          <TextContainer>
            <h1>Otwieramy.pl</h1>
            <h2>
              To inicjatywa mająca na celu wspomaganie przedsiębiorców, których
              lokale zostały bezprawnie zamknięte
            </h2>
            <p>
              Przejdź do mapy, wybierz kategorię lub przeszukaj wszystkie
              otwarte lokale w Twojej okolicy i baw się dobrze!
            </p>
            <Link to="/map">
              {" "}
              <BlueButton text="mapy" />
            </Link>
          </TextContainer>
        </LeftSide>
        <RightSide>
          <img src={startImage} />
        </RightSide>
      </WelcomePageWrapper>
    </div>
  )
}

export default WelcomePage
