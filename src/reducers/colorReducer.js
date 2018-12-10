import { combineReducers } from 'redux';

const colorReducer = (prevStore = { color: 'red' }, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return Object.assign({}, prevStore, { color: action.payload })
        default:
            return prevStore;
    }
};

const reducers = combineReducers({
    colorReducer,
});

export default reducers;
