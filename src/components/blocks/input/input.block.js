import React, { useState } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.span`
    display: inline-block;
`;

const InputContainer = styled.input`
    padding:10px;
    margin:10px 10px 10px 0;
    width: 200px;
    border:0; // remove default border
    border: 2px solid ${props => props.color};
    border-radius:10px;
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

function InputBlock() {
    const [inputValue, setInputValue] = useState('');
    const [isfocus, setIsfocus] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [isValid, setIsValid] = useState(true);

    const onSubmit = () => {
        validate(inputValue);
    };

    const validate = (value) => {
        let valid = true;
        let errorMessage = false;
        if (value.toString().trim().length > 0) {
            try {
                const re = /^[a-zA-Z ]*$/;
                if (!re.test(value)) {
                    valid = false;
                    errorMessage = 'Only letters are allowed in search field';
                } else {
                    errorMessage = '';
                }
            } catch (error) {
                valid = false;
                console.log('Error on validate regex' , error);
            }
        }
        setIsValid(valid);
        setErrorMsg(errorMessage);
    }

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
            const re = /^[a-zA-Z ]*$/;
            if (!re.test(e.key)) {
                setIsValid(false);
                setErrorMsg('Only letters are allowed in search field');
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
        <InputWrapper>
            <InputContainer
                value={inputValue}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                color={isValid ? '#b9b9b9' : 'red'}
                onKeyPress={handleKeyPress}
                isValid={isValid}
                placeholder='search'/>
            {
                <ErrorTextContainer>
                    {!isValid && errorMsg !== '' && errorMsg}
                </ErrorTextContainer>
            }
            
        </InputWrapper>
    );
}

export default InputBlock;