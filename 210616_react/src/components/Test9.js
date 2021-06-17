import React, { useState, useRef } from 'react';

const Test9 = () => {
    const nameRef = useRef()

    const [form, setForm] = useState({
        name:'', age:'', addr:''
    })

    //비구조할당
    const [name,age,addr] = form

    const changeInput = (e) => {
        const {value, name} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    
    const onReset = () => {
        setForm(
            {
                name:'', age:'',addr:''
            }
        )
        nameRef.current.focus()
    }
    return (
        <div>
            <h2>input 여러개 관리</h2>
            <input type='text' onChange={changeInput} value={name} ref={nameRef} name={name}/>
            <input type='text' onChange={changeInput} value={age} name={age}/>
            <input type='text' onChange={changeInput} value={addr} name={addr}/>
            <button onClick={onReset}>초기화</button>
            <hr/>
            <h4>
             {name} / {age} / {addr}
            </h4>
        </div>
    );
};

export default Test9;