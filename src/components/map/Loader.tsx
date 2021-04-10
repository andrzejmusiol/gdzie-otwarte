import React from "react"
import { Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons"

const Loader = (): JSX.Element => {
  const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />
  return <Spin indicator={antIcon} />
}

export default Loader
