import React from "react"
import startImage from "../assets/icons/meditation.svg"
import { Link } from "react-router-dom"
import { WelcomeWrapper } from "../utils/styled-components"
import { Button, Row, Col, Typography } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import fb from "../assets/icons/fb.svg"
import {
  about,
  mapButton,
  siteName,
  welcomePageHeaderText,
  welcomePageSubHeaderText,
} from "../utils/messages"

const { Title } = Typography

const WelcomePage = (): JSX.Element => {
  return (
    <WelcomeWrapper>
      <Row className="main-wrapper" justify="center" align="middle" wrap>
        <Col className="info-wrapper" md={12} sm={24}>
          <Title>{siteName}</Title>
          <h2>{welcomePageHeaderText}</h2>
          <p>{welcomePageSubHeaderText}</p>
          <Link to="/map">
            {" "}
            <Button type="primary" icon={<SearchOutlined />} size="large">
              {mapButton}
            </Button>
          </Link>
          <Link to="/o-projekcie">
            <Button type="link" size="large">
              {about}
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
