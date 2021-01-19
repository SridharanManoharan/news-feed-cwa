import React from 'react';
import Logo from '../../../assets/BT_logo.svg';
import {
  HeaderContainer,
  LogoContainer
} from './header.styles';

function HeaderBlock() {
    return(
        <HeaderContainer>
            <LogoContainer to='#'>
                <img src={Logo} alt='Logo' />
                <span>BT - New Feed Application</span>
            </LogoContainer>
        </HeaderContainer>
    );
};

export default HeaderBlock;