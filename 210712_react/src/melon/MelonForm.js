import React, { useState } from 'react';
import './MelonForm.css'

const MelonForm = () => {
    const [ text , setText ] = useState('')

    const changeInput = (e) => {
        const { value } = e.target 
        setText( value )
    }

    const onSubmit = (e)  => {
        e.preventDefault()
        //메인에 텍스트전달 
        setText('')
    }

    return (
        <form className="MelonForm"  onSubmit={onSubmit}>
            <input type="text" placeholder="곡명을 검색하세요" value={text} onChange={changeInput} />
        </form>
    );
};

export default MelonForm;