import PropTypes from 'prop-types';
import React, { createContext, useReducer } from 'react';
import RetrieveReducer from "./retrieve.reducer";

const INITIAL_STATE = {
    data: {},
    retrieveStatus: false,
    query: '',
    error: ''
};

export const InitialContext = createContext();

const InitialContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(RetrieveReducer, INITIAL_STATE);

    return (
        <InitialContext.Provider value={{ state, dispatch }}>
            {children}
        </InitialContext.Provider>
    );
};

export default InitialContextProvider;

InitialContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};
