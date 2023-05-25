import * as actionTypes from "../actions/Actions.js"

const initialState = {
    storeResult: []
}
const resultReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            console.log(action.result);
            return {

                storeResult: state.storeResult.concat({ id: new Date(), counter: action.result })
            };
        case actionTypes.DELETE_RESULT:
            return {
                storeResult: state.storeResult.filter((elm) => {
                    return elm.id !== action.deleteResultId;
                }),
            };
        case actionTypes.RESET:
            return {
                storeResult: []
            };


        default:
            return state;

    }

}

export default resultReducer;