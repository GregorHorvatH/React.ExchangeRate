import * as constants from '../constants';

const initialState = {
    date: new Date().toISOString(),
    visibleCCY: constants.visibleCCY
};

export default function filters(state = initialState, action) {
    switch (action.type) {
        case 'SET_DATE':
            return {
                ...state,
                date: action.value
            };
        case 'SET_VISIBLE_CCY':
            return {
                ...state,
                visibleCCY: action.value
            };
        default:
            return state;
    }
}