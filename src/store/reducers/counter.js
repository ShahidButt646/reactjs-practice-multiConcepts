import * as actionTypes from "../actions/actionscap.js"

const initialState = {
    counter: 0,
}
const counterReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD:
            return {

                counter: state.counter + action.value
            };
        case actionTypes.SUBTRACT:
            return {

                counter: state.counter - action.value
            };
        case actionTypes.MULTIPLY:
            return {

                counter: state.counter * action.value
            };
        case actionTypes.DIVIDE:
            return {

                counter: state.counter / action.value
            };
        case actionTypes.RESET:
            return {
                counter: 0
            };
        // i do have to create two reset functions one to reset counter, one to reset storeresult
        default:
            return state;

    }

}

export default counterReducer;