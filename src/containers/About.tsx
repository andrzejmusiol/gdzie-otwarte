import React from "react"
import { Layout, Row, Col, Typography, Divider, Button, List } from "antd"
import { GithubOutlined } from "@ant-design/icons"
import { messages } from "../utils/messages"
import FooterContainer from "../components/Footer"

const { Content } = Layout
const { Title, Paragraph, Link } = Typography

const About = (): JSX.Element => {
  return (
    <Layout className="layout">
      <Row justify="center">
        <Col xl={10} md={20} xs={24}>
          <Content
            className="site-layout"
            style={{ padding: "0 50px", marginTop: 64 }}
          >
            <div className="site-layout-background" style={{ padding: 24 }}>
              <Title>Cel projektu</Title>
              <Paragraph>{messages.site.aboutContent}</Paragraph>
              <Divider />
              <Title>{messages.site.whatToDoTitle}</Title>
              <Paragraph>Przejdź do <Button><Link href="/map">mapy</Link></Button> aby zobaczyć, gdzie przedsiębiorcy prowadzą swoje lokale i po prostu ich odwiedź.
              </Paragraph>
              <Paragraph>{messages.site.whatToDoContent}</Paragraph>
            </div>
            <div className="site-layout-background" style={{ padding: 24 }}>
              <Title level={3}>{messages.site.questions}</Title>
              <Paragraph>
                <a href="mailto: kontakt@gdzie-otwarte.pl">
                  {messages.site.email}
                </a>
              </Paragraph>
              <Divider />
            </div>
          </Content>
        </Col>
      </Row>
      <Row justify="center">
        <Col xl={10} md={20} xs={24}>
          <Content
            className="site-layout"
            style={{ padding: "0 50px", marginTop: 10 }}
          >
            <div className="site-layout-background" style={{ padding: 24 }}>
              <Title level={3}>O aplikacji</Title>
              <Paragraph>Version: 0.1.0 | Licence: Open Source</Paragraph>
              <Paragraph>
                <Link
                  href="https://github.com/bigeyedes/gdzie-otwarte"
                  target="_blank"
                >
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<GithubOutlined />}
                  />
                </Link>
              </Paragraph>
            </div>
          </Content>
        </Col>
      </Row>
      <Row justify="center">
        <Col xl={10} md={20} xs={24}>
          <Content
            className="site-layout"
            style={{ padding: "0 50px", marginTop: 10 }}
          >
            <div className="site-layout-background" style={{ padding: 24 }}>
              <Title level={3}>W nadchodzącym update:</Title>
              <List
                size="small"
                bordered
                dataSource={messages.update}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </div>
          </Content>
        </Col>
      </Row>
      <FooterContainer />
    </Layout>
  )
}

export default About
