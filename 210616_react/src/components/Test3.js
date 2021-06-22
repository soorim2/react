import React, { useState } from 'react';

const Test3 = () => {
    const [userid, setUserid] = useState('')
    const [userpw, setUserpw] = useState('')

    const changeInput1 = (e) => {
        // setUserid(e.target.value)
        const {value} = e.target
        setUserid(value)
    }
    const changeInput2 = (e) => {
        // setUserpw(e.target.value)
        const {value} = e.target
        setUserpw(value)
    }

    const onReset = () => {
        setUserid('')
        setUserpw('')
    }

    return (
        <div>
            <input type='text' onChange={changeInput1} value={userid} />
            <input type='text' onChange={changeInput2} value={userpw} />
            <button onClick={onReset}>초기화</button>
            <h2>id : {userid}</h2>
            <h2>pw : {userpw}</h2>
        </div>
    );
};

export default Test3;