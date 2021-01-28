import React from 'react';
import styled from 'styled-components';

const ArticleWrapper = styled.div`
    padding: 30px;
    border: 1px solid lightgray;
    border-radius: 5px;
    background: #f3f8fd;
`;

const TextContainer = styled.span`
    display: block;
    h3, p, a{
        display: inline-block;
    }
`;

const ImageContainer = styled.img`
    display: block;
    width: 100%;
    height: 15rem;
`;

function ArticleBlock ({ data }) {

    return (
        <ArticleWrapper>
            <ImageContainer src={data.urlToImage} />
            <h2>{data.title}</h2>
            <hr/>
            <p>{data.description}</p>
            <TextContainer><h3>Author: </h3> <p>{data.author}</p></TextContainer>
            <TextContainer><h3>Published at: </h3> <p>{data.publishedAt}</p></TextContainer>
            <TextContainer><p>Source: </p><a href={data.url}> {data.source.name}</a></TextContainer>
        </ArticleWrapper>
    );
}

export default ArticleBlock;