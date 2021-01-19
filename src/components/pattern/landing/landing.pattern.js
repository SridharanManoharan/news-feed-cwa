import React from 'react';
import styled from 'styled-components';
import HeaderBlock from '../../blocks/header/header.block';
import FooterBlock from '../../blocks/footer/footer.block';
import SearchBlock from '../../blocks/search/search.block';
import TableBlock from '../../blocks/table/table.block';

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 85vh;
    margin: 20px;
`;

const PageHeadingContainer = styled.header`
    margin-left: auto;
    margin-right: auto;
`;

const NewsFeedWrapper = styled.section`
    margin-left: auto;
    margin-right: auto;
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
                        <SearchBlock />
                    </NewsFeedWrapper>
                    <TableBlock />
                </BodyWrapper>
            <FooterBlock />
        </div>
    );
}

export default LandingPattern;