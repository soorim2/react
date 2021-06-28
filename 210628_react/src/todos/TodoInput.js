import React, { useRef, useState } from 'react';
import './TodoInput.css'
const TodoInput = ({onAdd}) => {
    const textRef=useRef()
    const [text, setText] = useState('')
    const changeInput = (e) => {
        const {value} = e.target
        setText(value)
    }
// 엔터를 쳤을때에도 결과가 출력이 되게
    const onSubmit = (e) => {
        // e.preventDefault 를 사용하여 새로고침을 방지
        e.preventDefault()  
        onAdd(text)
        // 엔터 클릭 시 인풋 값을 지워줌
        setText('')
        textRef.current.focus()
    }

    return (
        // submit을 폼에 넣어줌 (form속성 이용)
        <form className="TodoInput" onSubmit={onSubmit}>
            <input type="text" value={text} onChange={changeInput} ref={textRef}/>
            <button type="submit">추가</button>
        </form>
    );
};

export default TodoInput;