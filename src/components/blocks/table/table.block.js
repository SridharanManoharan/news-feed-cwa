import React, {useContext} from 'react';
import styled from 'styled-components';
import {InitialContext} from '../../../contexts/initial.context';
import ArticleBlock from '../article/article.block';

const GridContainer = styled.div`
    margin: 50px auto;
    display: grid;
    grid-gap: 1rem;
    --auto-grid-min-size: 24rem;
    grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
    @media (max-width: 480px) {
        --auto-grid-min-size: 16rem;
        grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
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