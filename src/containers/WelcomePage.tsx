import React from "react"
import startImage from "../assets/icons/meditation.svg"
import { Link } from "react-router-dom"
import { WelcomeWrapper, HowItWorksWrapper } from "../utils/styled-components"
import { Button, Row, Col, Typography, Divider, Steps } from "antd"
import {
  SearchOutlined,
  UserOutlined,
  RocketOutlined,
  LoadingOutlined,
  SmileOutlined,
  PlusCircleOutlined,
  RightCircleOutlined,
  NodeIndexOutlined,
} from "@ant-design/icons"
import fb from "../assets/icons/fb.svg"
import { messages } from "../utils/messages"
import FooterContainer from "../components/Footer"

const { Title, Paragraph } = Typography
const { Step } = Steps

const WelcomePage = (): JSX.Element => {
  return (
    <>
      <WelcomeWrapper>
        <Row
          className="main-wrapper"
          justify="center"
          align="middle"
          wrap
          data-testid="welcome-row-test-id"
        >
          <Col className="info-wrapper" md={12} sm={24}>
            <Title>{messages.site.siteName}</Title>
            <Title level={2}>{messages.site.welcomePageHeaderText}</Title>
            <Divider />
            <Paragraph>{messages.site.welcomePageSubHeaderText}</Paragraph>

            <Link to="/map">
              {" "}
              <Button type="primary" icon={<SearchOutlined />} size="large">
                {messages.site.mapButton}
              </Button>
            </Link>
            <Link to="/o-projekcie">
              <Button
                type="link"
                size="large"
                data-testid="welcome-btn-map-test-id"
              >
                {messages.site.about}
              </Button>
            </Link>
            <Col>
              <Link
                to="/o-projekcie"
                data-testid="welcome-btn-about-id-test-id"
              >
                <img src={fb} alt="gdzie-otwarte-facebook" />
              </Link>
            </Col>
          </Col>
          <Col span={12}>
            <img
              className="welcome-image"
              src={startImage}
              alt="gdzie-twarte-strona-glowna"
            />
          </Col>
        </Row>
      </WelcomeWrapper>
      <HowItWorksWrapper>
        <Row
          justify="center"
          align="middle"
          wrap
          className="how-it-works-wrapper"
        >
          <Col className="info-wrapper" xxl={6} xl={8} md={10} sm={24}>
            <Title level={2}>{messages.site.howItWorks}</Title>
            <Divider />
            <Title level={3}>{messages.site.searchForObjects}</Title>
            <Steps direction="vertical">
              <Step
                title="Mapa"
                status="finish"
                description={messages.site.goToMap}
                icon={<RightCircleOutlined />}
              />
              <Step
                title="Punkt"
                status="finish"
                description={messages.site.findObject}
                icon={<NodeIndexOutlined />}
              />
              <Step
                title="Idź!"
                status="finish"
                description={messages.site.visitObject}
                icon={<SmileOutlined />}
              />
            </Steps>
            <Divider />
            <Title level={3}>{messages.site.addObjectTitle}</Title>
            <Steps direction="vertical">
              <Step
                title="Konto"
                status="finish"
                description={messages.site.signInUp}
                icon={<UserOutlined />}
              />
              <Step
                title="Dodaj"
                status="finish"
                description={messages.site.addObject}
                icon={<PlusCircleOutlined />}
              />
              <Step
                title="Moderacja"
                status="finish"
                description={messages.site.moderateObject}
                icon={<LoadingOutlined />}
              />
              <Step
                title="Publikacja"
                status="finish"
                description={messages.site.publishObject}
                icon={<RocketOutlined />}
              />
            </Steps>
          </Col>
        </Row>
      </HowItWorksWrapper>
      <FooterContainer />
    </>
  )
}

export default WelcomePage
