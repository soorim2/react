import React, { useState, useRef } from 'react';

const FriendInput = ({onAdd}) => {
    const nameRef = useRef()
    const[form, setForm] = useState({
       name:'',age:'',image:''
    })
    const {name, age, image} = form
    const changeInput = (e) => {
        const {value, name, age, image} = e.target
        setForm({
            ...form,
            [name] : value,
            [age]: value,
            [image]: value
        })
    }
    const onInsert = () => {
        //공백무시
        if( !name || !age || !image ) return 
        //데이터추가 
        onAdd(form)
        //초기화
        setForm({
            name:'', age:'', image:''
        })
        //포커스 
        nameRef.current.focus()
    }
    return (
        <div className="formadd">
            <p>
                <lable>이름</lable>
                <input type="text" value={name} name="name" onChange={changeInput} ref={nameRef}/>
            </p>
            <p>
                <lable>나이</lable>
                <input type="text" value={age} name="age"onChange={changeInput}/>
            </p>
            <p>
                <lable>사진</lable>
                <input type="text"value={image} name="image"onChange={changeInput}/>
            </p>
            <p>
                <button onClick={onInsert}>추가</button>
            </p>
        </div>
    );
};

export default FriendInput;