import React from 'react'
import styled from 'styled-components';

const Button = () => {
    return (<div 
        onClick={ () => alert('ok') }
        style={style.button}>TOTTO</div>)
}
const style = styled.button`
    background: red;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 300;
    padding: 9px 36px;
`;

export default Button;