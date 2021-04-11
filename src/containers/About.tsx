import React from "react"
import { Layout, Row, Col, Typography, Divider, Button } from "antd"
import { GithubOutlined } from "@ant-design/icons"
import { useWindowDimensions } from "../hooks/hooks"

const { Content, Footer } = Layout
const { Title, Paragraph, Link, Text } = Typography

const About = (): JSX.Element => {
  const { width } = useWindowDimensions()
  const widthRule = width < 960 ? "100%" : 960

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
              <Paragraph>
                Gdzie-otwarte.pl to projekt mający na celu wspomóc
                przedsiębiorców w dobie pandemii SARS Covid-19, którzy w wyniku
                nieodpowiedzialnej i bezprawnej polityki polskiego rządu
                stracili możliwość wykonywania pracy, tym samym źródła dochodu.
              </Paragraph>
              <Divider />
              <Title>Tło</Title>
              <Paragraph>
                Od początku wybuchu pandemii w marcu 2020 roku, poprzez
                nakładnie absurdalnych i bezprawnych obostrzeń, polski rząd
                znacząco ograniczył możliwości zarobkowe polaków skupiając się
                na niewłaściwych obszarach pomocy.
              </Paragraph>
              <Paragraph>
                Skutkiem tych działań jest dramatycznie rosnące bezprobocie,
                największa inflacja w UE oraz zwiększające się ubóstwo. W tym
                samym czasie rząd sprzeniewierza ogromne sumy publicznych
                środków na cele związane z członkami i przyjaciółmi partii,
                m.in.:
              </Paragraph>
              <Paragraph>
                <ol>
                  <li>Afera wyborcza Jacka Sasina - 68 mln PLN (~ €15 mln)</li>
                  <li>
                    Afera ministra zdrowia Łukasza Szumowskiego - 100 mln PLN (~
                    €22 mln)
                  </li>
                  <li>Afera TVP - 1 mld PLN (~ €220 mln)</li>
                </ol>
              </Paragraph>
              <Divider />
              <Title>Co możesz zrobić?</Title>
              <Paragraph>
                Przejdź do <Link href="/map">mapy</Link> zobacz którzy
                przedsiębiorcy prowadzą swoje lokale i po prostu ich odwiedź.
              </Paragraph>
              <Paragraph>
                Idź na obiad, drinka, skorzystaj z fryzjera, idź na siłownię,
                albo wyjedź na weekend korzystając z hotelu.
              </Paragraph>
              <Paragraph>
                Zachowajmy zasady bezpieczeństwa i reżimu sanitarnego, ale{" "}
                <Text strong>nie dajmy się zamknąć!</Text>
              </Paragraph>
            </div>
          </Content>
        </Col>
      </Row>
      <Row justify="center">
        <Col xl={10} md={20} xs={24}>
          <Content
            className="site-layout"
            style={{ padding: "0 50px", marginTop: 64 }}
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
      <Footer style={{ textAlign: "center" }}>
        Created by Andrzej Musioł | {new Date().getFullYear()}
      </Footer>
    </Layout>
  )
}

export default About
