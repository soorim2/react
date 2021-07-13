import React, { useState, useRef } from 'react';

const Test9 = () => {
    const nameRef = useRef()
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [addr, setAddr] = useState('')

    const onName = (e) => {
        const {value} = e.target
        setName(value)
    }
    const onAge = (e) => {
        const {value} = e.target
        setAge(value)
    }
    const onAddr = (e) => {
        const {value} = e.target
        setAddr(value)
    }
    const onReset = () => {
        setName('')
        setAge('')
        setAddr('')
        nameRef.current.focus()
    }
    return (
        <div>
            <h2>input 여러개 관리</h2>
            <input type='text' onChange={onName} value={name} ref={nameRef}/>
            <input type='text' onChange={onAge} value={age}/>
            <input type='text' onChange={onAddr} value={addr}/>
            <button onClick={onReset}>초기화</button>
            <hr/>
            <h4>
             {name} / {age} / {addr}
            </h4>
        </div>
    );
};

export default Test9;