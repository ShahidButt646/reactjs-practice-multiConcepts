import React, { useState, useEffect } from 'react'

function EffectUnderstanding() {
    const [btn, setBtn] = useState(0);
    const [btn2, setBtn2] = useState(0);


    return (
        <>
            <h1>
                {btn}
            </h1>
            <h1>
                {btn2}
            </h1>
            <button
                onClick={() => setBtn(btn + 1)}
            >
                click me
            </button>
            <button
                onClick={() => setBtn2(btn2 + 1)}
            >
                click me
            </button>
        </>
    )
}

export default EffectUnderstanding