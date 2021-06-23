import React, { useState } from 'react';

const Test2 = () => {
    // const [password, setpassword] = useState('');
    const [form, setForm] = useState({
        userName:'',
        password: ''
    });
    const {userName , password} = form 
    // const changeInput1 = e => {
    //     const {value} = e.target
    //     setUserName(value)
    // }
    // const changeInput2 = e => {
    //     const {value} = e.target
    //     setpassword(value)
    // }
    const changeInput = e => {
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
            {/* <button disabled={password.length>6?'':'disabled'}>확인</button> */}
            <button disabled={password.length<6}>확인</button>
            {/* {
                password.length>6
                ?
                <button >확인</button> 
                :
                <button disabled>확인</button>
            } */}
        </div>
    );
};

export default Test2;