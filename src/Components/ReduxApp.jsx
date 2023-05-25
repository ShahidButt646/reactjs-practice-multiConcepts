import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from "../store/actions/actions.js"

const MyApp = (props) => {

    return (
        <>
            <header className="App-header">
                <h1


                >
                    {props.ctr}
                </h1>
                <div className="btn-con">
                    <button
                        value={1}
                        onClick={props.onAdd}
                    >
                        Add 1
                    </button>
                    <button
                        value={2}
                        onClick={props.onSub}
                    >
                        Sub 1
                    </button>
                    <button
                        value={3}
                        onClick={props.onMul}
                    >
                        Mul 2
                    </button>
                    <button
                        value={4}
                        onClick={props.onDiv}
                    >
                        Dev 2
                    </button>
                    <button

                        onClick={props.onReset}
                    >
                        Reset
                    </button>
                    <button

                        onClick={() => props.onStoreResult(props.ctr)}
                    >
                        Store Result
                    </button>
                </div>
                <ul>
                    {
                        props.srR.map((elm) => (
                            <li
                                onClick={() => props.onDeleteResult(elm.id)}
                                key={elm.id}
                            >
                                {elm.counter}
                            </li>
                        ))
                    }
                </ul>

            </header>

        </>
    )
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        srR: state.resR.storeResult,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAdd: () => dispatch({ type: actionTypes.ADD, value: 1 }),
        onSub: () => dispatch({ type: actionTypes.SUBTRACT, value: 1 }),
        onMul: () => dispatch({ type: actionTypes.MULTIPLY, value: 2 }),
        onDiv: () => dispatch({ type: actionTypes.DIVIDE, value: 2 }),
        onStoreResult: (res) => dispatch({ type: actionTypes.STORE_RESULT, result: res }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, deleteResultId: id }),
        onReset: () => dispatch({ type: actionTypes.RESET }),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyApp);