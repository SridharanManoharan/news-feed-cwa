import { addError, updateData } from './retrieve.action';
import retrieveTypes from './retrieve.type';

const retrieveReducer = (state, action) => {
    switch (action.type) {
    case retrieveTypes.ERROR:
        return addError(action.payload, state);
    case retrieveTypes.UPDATE_DATA:
        return updateData(action.payload, state);
    default:
        return state;
    }
};

export default retrieveReducer;