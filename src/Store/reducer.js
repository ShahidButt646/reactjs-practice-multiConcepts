import * as actionTypes from "./actions.js"

const initialState = {
    counter: 3
}
const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD:
            return {
                counter: state.counter + action.value
            };
            break;
        case actionTypes.SUBTRACT:
            return {
                counter: state.counter - action.value
            };
            break;
        case actionTypes.MULTIPLY:
            return {
                counter: state.counter * action.value
            };
            break;
        case actionTypes.DIVIDE:
            return {
                counter: state.counter / action.value
            };
            break;
        case actionTypes.RESET:
            return {
                counter: 0
            };
            break;

        default:
            return state;

    }

}

export default rootReducer;