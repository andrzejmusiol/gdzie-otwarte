import React from "react"
import startImage from "../assets/icons/meditation.svg"
import { Link } from "react-router-dom"
import { WelcomeWrapper } from "../utils/styled-components"
import { Button, Row, Col, Typography } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import fb from "../assets/icons/fb.svg"

const { Title } = Typography

const WelcomePage = (): JSX.Element => {
  return (
    <WelcomeWrapper>
      <Row className="main-wrapper" justify="center" align="middle" wrap>
        <Col className="info-wrapper" md={12} sm={24}>
          <Title>Otwieramy.pl</Title>
          <h2>
            To inicjatywa mająca na celu wspomaganie przedsiębiorców, których
            lokale zostały bezprawnie zamknięte
          </h2>
          <p>
            Przejdź do mapy, wybierz kategorię lub przeszukaj wszystkie otwarte
            lokale w Twojej okolicy i baw się dobrze!
          </p>
          <Link to="/map">
            {" "}
            <Button type="primary" icon={<SearchOutlined />} size="large">
              Mapa
            </Button>
          </Link>
          <Link to="/o-projekcie">
            <Button type="link" size="large">
              O projekcie
            </Button>
          </Link>
          <Col>
            <Link to="/o-projekcie">
              <img src={fb} />
            </Link>
          </Col>
        </Col>
        <Col span={12}>
          <img className="welcome-image" src={startImage} />
        </Col>
      </Row>
    </WelcomeWrapper>
  )
}

export default WelcomePage
