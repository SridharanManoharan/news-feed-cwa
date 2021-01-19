import React from 'react';
import styled from 'styled-components';
import HeaderBlock from '../../blocks/header/header.block';
import FooterBlock from '../../blocks/footer/footer.block';

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function LandingPattern() {
    return (
        <section>
            <HeaderBlock />
            <BodyWrapper></BodyWrapper>
            <FooterBlock />
        </section>
    );
}

export default LandingPattern;