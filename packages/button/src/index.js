import React from 'react'
import styled from "@emotion/styled";
// import StyledButton from './style'

const StyledButton = styled.button`
    background: blue;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 300;
    padding: 9px 36px;
`

const Button = ({ children, ...props }) => {
  return (
    <div>
      <StyledButton {...props}>{ children }</StyledButton>
    </div>
  )
}

export default Button
