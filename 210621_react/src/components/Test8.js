import React, { useState, useRef } from 'react';

const Test8 = () => {
    const no = useRef(1) //고유값
    const textRef = useRef() //위치값
    const [data,setData] = useState([])
    const [text, setText] = useState('') // change가 일어날 때 값을 담을 곳
    const onText = (e) => {
        const {value} = e.target
        setText(value)
    }
    const onAdd = (e) => {
        e.preventDefault() // submit 새로고침을 막아줌
        setData([
            ...data,
            {
                id: no.current++,
                // text: text 
                text // 같은이름 두개면 하나만 써주면 된다.
            }
        ])
        setText('')
        textRef.current.focus()
        // ref로 연결된 textRef 에 focus를 준다
    }
    return (
        <div>
            <form onSubmit={onAdd}>
                <input type="text" onChange={onText} value={text} ref={textRef}/> 
                {/* ref로 연결 */}
                <button type="submit">추가</button>
            </form>
            <ul>
                {
                    data.map(item => <li key={data.id}>
                        {item.id}/ {item.text}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test8;