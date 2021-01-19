import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../../assets/BT_logo.svg';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: #333333;
  position: sticky;
  top: 0;
`;

export const LogoContainer = styled(Link)`
  padding: 20px 0px 20px 15px;
  font-family: Calibri;
  font-size: 25px;
  text-decoration: none;
  color: #ffffff;
  display: block;
  img {
    height:50px;
    width: 50px;
    margin-right: 10px;
    vertical-align: middle;
    display: inline-block;
  }
  span {
    display: inline-block;
  }
`;

function HeaderBlock() {
    return(
        <HeaderContainer>
            <LogoContainer to='/'>
                <img src={Logo} alt='Logo' />
                <span>BT - News Feed Application</span>
            </LogoContainer>
        </HeaderContainer>
    );
};

export default HeaderBlock;