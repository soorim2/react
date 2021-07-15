import React, { useEffect, useState } from 'react';
import './MelonForm.css'

const MelonForm = ({onSearch}) => {
    const [text,setText]=useState('')

    const changeInput=(e)=>{
        const{value}=e.target
        setText(value)
    }
    const onSubmit = (e) => {
        // 렌더링방지
        e.preventDefault()
        // 메인에 텍스트 전달
        // onSearch(text)
        // 엔터쳤을때 텍스트 초기화
        setText('')
    }
    useEffect(()=>{
        onSearch(text)
    },[text])
    return (
        <form className="MelonForm" onSubmit={onSubmit}>
            <input type="text" placeholder="곡명을 검색하세요" value={text}  onChange={changeInput}/>
        </form>
    );
};

export default MelonForm;