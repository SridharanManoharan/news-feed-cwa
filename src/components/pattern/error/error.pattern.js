import React from 'react';
import styled from 'styled-components';
import HeaderBlock from '../../blocks/header/header.block';
import FooterBlock from '../../blocks/footer/footer.block';

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 85vh;
    margin: auto;
`;

const ErrorWrapper = styled.div`
    margin-top: 40px;
    height: 40%;
    min-height: 300px;
    width: 90%;
    background-color: #e8e8e8;
    border-radius: 10px;
`;

const ErrorContainer = styled.div`
    margin: 30px;
    h1 {
        color: #de0a0a;
    }
    p {
        margin-top: 30px;
        font-size: 24px;
    }
    hr {
        margin-top: 50px;
    }
`;

function ErrorPattern() {
    return (
        <div>
            <HeaderBlock />
                <BodyWrapper>
                    <ErrorWrapper>
                        <ErrorContainer>
                            <h1>Error Page</h1>
                            <p>There is a techinical error at the moment. Please try again later.</p>
                            <hr />
                        </ErrorContainer>
                    </ErrorWrapper>
                </BodyWrapper>
            <FooterBlock />
        </div>
    );
}

export default ErrorPattern;