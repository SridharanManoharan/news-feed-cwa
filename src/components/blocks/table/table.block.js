import React, {useContext} from 'react';
import styled from 'styled-components';
import {InitialContext} from '../../../contexts/initial.context';
import ArticleBlock from '../article/article.block';

const GridContainer = styled.div`
    margin: 50px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: .5rem;
    @media (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 650px) {
        grid-template-columns: 1fr;
    }
`;

const NoDataContainer = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    p {
        font-size: 24px;
    }
`;

function TableBlock() { 
    const { state } = useContext(InitialContext);

    return (
        <div>
            {(state.retrieveStatus && state.data.length > 0) && 
            (<GridContainer>
                {state.data.map((elem, index) => 
                    <ArticleBlock key={'article' + index} data={elem} />
                )}
            </GridContainer>)}
            {(state.retrieveStatus && state.data.length === 0) && (
                <NoDataContainer><p>No search result found for the {state.query}</p></NoDataContainer>
            )}
        </div>
    );
}

export default TableBlock;