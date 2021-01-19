import React from 'react';
import styled from 'styled-components';
import HeaderBlock from '../../blocks/header/header.block';
import FooterBlock from '../../blocks/footer/footer.block';
import InputBlock from '../../blocks/input/input.block';
import ButtonBlock from '../../blocks/button/button.block';

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 20px;
`;

const PageHeadingContainer = styled.header`
    margin-left: auto;
    margin-right: auto;
`;

const NewsFeedWrapper = styled.section`
    margin-left: auto;
    margin-right: auto;
    display: block;
`;

function LandingPattern() {
    return (
        <div>
            <HeaderBlock />
                <BodyWrapper>
                    <PageHeadingContainer>
                        <h1>News feed</h1>
                    </PageHeadingContainer>
                    <NewsFeedWrapper>
                        <InputBlock />
                        <ButtonBlock />
                    </NewsFeedWrapper>
                </BodyWrapper>
            <FooterBlock />
        </div>
    );
}

export default LandingPattern;