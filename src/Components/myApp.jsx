import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from "../Store/actions.js"

const MyApp = (props) => {
    useEffect(() => {
        console.log("my app rendered");
    });
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
                </div>

            </header>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAdd: () => dispatch({ type: actionTypes.ADD, value: 1 }),
        onSub: () => dispatch({ type: actionTypes.SUBTRACT, value: 1 }),
        onMul: () => dispatch({ type: actionTypes.MULTIPLY, value: 2 }),
        onDiv: () => dispatch({ type: actionTypes.DIVIDE, value: 2 }),
        onReset: () => dispatch({ type: actionTypes.RESET }),


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyApp);