export const addError = (payload, state) => {
    return {
        ...state,
        retrieveError: payload.error,
        retrieveStatus: payload.status
    };
};

export const updateData = (payload, state) => {
    return {
        ...state,
        retrieveStatus: payload.status,
        data: payload.articles,
        query: payload.searchString
    };
};