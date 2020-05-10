import React from 'react'
import styled from "@emotion/styled";
import { font, primaryColors, shape } from "@abl/theme";

// import StyledButton from './style'

const StyledButton = styled.button`
  ${font}; ${primaryColors}; ${shape};
`

const Button = ({ children, ...props }) => {
  console.warn(primaryColors);
  return (
    <div>
      <StyledButton {...props}>{ children }</StyledButton>
    </div>
  )
}

export default Button
