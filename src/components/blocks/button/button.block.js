import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
    display:inline-block;
    padding:0.80em 2.5em;
    border:0.1em solid #FFFFFF;
    margin:0 0.3em 0.3em 0;
    border-radius:2em;
    box-sizing: border-box;
    text-decoration:none;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    color:#FFFFFF;
    text-align:center;
    transition: all 0.2s;
    cursor: pointer;
    background: #333333;
    :hover{
        background-color:#4c4949;
    }
`;

function ButtonBlock() {
    return(
        <ButtonContainer>
            Submit
        </ButtonContainer>
    );
}

export default ButtonBlock;