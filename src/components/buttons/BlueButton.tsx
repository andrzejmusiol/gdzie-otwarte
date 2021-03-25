import React from "react"
import { ButtonTypes } from "../../types/types"
import { Button } from "../../utils/styled-components"

const BlueButton: React.VFC<ButtonTypes> = ({ text }) => <Button>{text}</Button>

export default BlueButton
