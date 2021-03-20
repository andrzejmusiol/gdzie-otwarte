import React from "react"
import styled from "styled-components"
import { ButtonTypes } from "../../types/types"
import { colors } from "../../utils/colors"

const Button = styled.button`
  padding: 10px 20px;
  text-transform: uppercase;
  color: ${colors.white};
  background: ${colors.blue};
  border: none;
  border-radius: 5px;
  padding: 24px 80px;
  font-size: 24px;
  margin: 20px 0;
`

const BlueButton: React.VFC<ButtonTypes> = ({ text }) => <Button>{text}</Button>

export default BlueButton
