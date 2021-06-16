import React, { useState, useRef } from 'react';

const Test9 = () => {
    const nameRef = useRef()

    const [form, setForm] = useState({
        name:'', age:'', addr:''
    })

    const onName = (e) => {
        const {value} = e.target
        setForm({
            ...form,
            name: value
        })
    }
    const onAge = (e) => {
        const {value} = e.target
        setForm({
            ...form,
            age : value
        })
    }
    const onAddr = (e) => {
        const {value} = e.target
        setForm({
            ...form,
            addr : value
        })
    }
    const onReset = () => {
        setForm('')
        nameRef.current.focus()
    }
    return (
        <div>
            <h2>input 여러개 관리</h2>
            <input type='text' onChange={onName} value={form.name} ref={nameRef}/>
            <input type='text' onChange={onAge} value={form.age}/>
            <input type='text' onChange={onAddr} value={form.addr}/>
            <button onClick={onReset}>초기화</button>
            <hr/>
            <h4>
             {form.name} / {form.age} / {form.addr}
            </h4>
        </div>
    );
};

export default Test9;