import React, {useContext, useState} from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { InitialContext } from '../../../contexts/initial.context';
import retrieveTypes from '../../../contexts/retrieve.type';
import { API_KEY, RETRIEVE_API } from '../../../constants';

const SearchWrapper = styled.div`
    display: block;
`;

const InputWrapper = styled.span`
    display: inline-block;
    @media (max-width: 480px) {
        display: block;
    }
`;

const InputContainer = styled.input`
    padding:10px;
    margin:10px 10px 10px 0;
    max-width: 200px;
    border: solid 1px ${props => props.color};
    border-radius:0.4em;
    box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
    font-family:inherit;
    font-size: inherit;
`;

const ErrorTextContainer = styled.p`
    margin: 0;
    padding: 0;
    font-size: 12px;
    margin-left: 8px;
    color: red;
    display: table;
`;

const ButtonContainer = styled.button`
    display:inline-block;
    padding:0.80em 2.5em;
    border:0.1em solid #FFFFFF;
    margin:0 0.3em 0.3em 0;
    border-radius:0.6em;
    box-sizing: border-box;
    text-decoration:none;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    color:#FFFFFF;
    text-align:center;
    transition: all 0.2s;
    cursor: pointer;
    background: #6400aa;
    :hover{ 
        background-color:#520f82;
    }
    @media (max-width: 480px) {
        display: block;
    }
`;

function SearchBlock() {
    const {dispatch} = useContext(InitialContext);
    const history = useHistory();
    const [inputValue, setInputValue] = useState('');
    const [isfocus, setIsfocus] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleError = (message) => {
        dispatch({
            type: retrieveTypes.ERROR,
            payload: { error: message, status: false }
        });
        history.push('/error');
    };

    const updateData = (responseBody) => {
        const articlesArr = responseBody.articles.length > 10 ? 
        responseBody.articles.slice(0, 10) : responseBody.articles;
        dispatch({
            type: retrieveTypes.UPDATE_DATA,
            payload: { articles: articlesArr, status: true, searchString: inputValue }
        });
    }

    const retrieveTelephoneDetails = async () => {
        try {
            const response = await fetch(RETRIEVE_API + inputValue, {
                method: 'GET',
                mode: 'cors',
                credentials: 'same-origin',
                headers: {
                    'X-Api-Key': API_KEY
                }
            });
            const responseBody = await response.json();
            if (response.status !== 200) {
                handleError(responseBody.message);
            } else {
                updateData(responseBody);
            }
        } catch(error) {
            handleError(true)
        }
    }

    const validate = (value) => {
        let valid = true;
        let errorMessage = false;
        if (value.toString().trim().length > 0) {
            try {
                const re = /^[a-zA-Z0-9 ]*$/;
                if (!re.test(value)) {
                    setIsValid(false)
                    setErrorMsg('Only letter, number and space are allowed in search field');
                } else {
                    setErrorMsg('');
                    retrieveTelephoneDetails();
                }
            } catch (error) {
                valid = false;
                console.log('Error on validate regex' , error);
            }
        } else {
            valid = false;
            errorMessage = 'Please enter a value';
        }
        setIsValid(valid);
        setErrorMsg(errorMessage);
    }

    const onSubmit = () => {
        validate(inputValue);
    };

    const handleBlur = (e) => {
        setIsfocus(false);
    };

    const handleFocus = (e) => {
        setIsfocus(true);
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = (e) => {
        try {
            const re = /^[a-zA-Z0-9 ]*$/;
            if (!re.test(e.key)) {
                setIsValid(false);
                setErrorMsg('Only letter, number and space are allowed in search field');
                e.preventDefault();
            } else {
                setIsValid(true);
                setErrorMsg('');
            }
        } catch (error) {
            console.log('Error on keypress for search field' , error);
        }
    };

    return(
        <SearchWrapper>
            <InputWrapper>
                <InputContainer
                    value={inputValue}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    color={isValid ? '#666' : 'red'}
                    onKeyPress={handleKeyPress}
                    isValid={isValid}
                    placeholder='search'/>
                {
                    <ErrorTextContainer>
                        {!isValid && errorMsg !== '' && errorMsg}
                    </ErrorTextContainer>
                }
            </InputWrapper>
            <ButtonContainer type='submit' onClick={onSubmit}>
                Search
            </ButtonContainer>
        </SearchWrapper>
    );
}

export default SearchBlock;