import React from 'react';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  height: 50px;
  justify-content: space-between;
  background-color: #333333;
  position: sticky;
  bottom: 0;
  left: 0;
`;

function FooterBlock() {
    return(
        <FooterContainer>       
        </FooterContainer>
    );
};

export default FooterBlock;