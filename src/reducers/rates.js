const initialState = [];

export default function rates(state = initialState, action) {
    switch (action.type) {
        case 'SET_RATE':
            return action.value;
        default:
            return state;
    }
}