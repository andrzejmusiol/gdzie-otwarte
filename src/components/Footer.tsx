import React from "react"
import { Layout, Button, Typography } from "antd"
import { GithubOutlined } from "@ant-design/icons"

const { Footer } = Layout
const { Link } = Typography

const FooterContainer = (): JSX.Element => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Created by Andrzej Musioł | {new Date().getFullYear()}
      <Link href="https://github.com/bigeyedes/gdzie-otwarte" target="_blank" style={{marginLeft: 20}}>
        <Button type="primary" shape="circle" icon={<GithubOutlined />} />
      </Link>
    </Footer>
  )
}

export default FooterContainer
