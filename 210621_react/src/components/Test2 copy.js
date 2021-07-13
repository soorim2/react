import React, { useState } from 'react';

const Test2 = () => {
    const [form, setForm] = useState({
        userName:'',
        password: ''
    });
    const {userName , password} = form 
    
    const changeInput = (e) => {
        const {value, name} = e.target
        setForm({
            ...form,
            [name]:value
        })
    }
    return (
        <div>
            <input type="text" name="userName" value={userName} onChange={changeInput} />
            <input type="password" name="password" value={password} onChange={changeInput} />
            <button disabled={password.length<6}>확인</button>
        </div>
    );
};

export default Test2;