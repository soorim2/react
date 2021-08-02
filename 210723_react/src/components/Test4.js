import React, { useState, useMemo, useCallback } from 'react';

const Test4 = () => {
    const [text, setText] = useState('')
    const [data, setData] = useState([])

    const onAdd = useCallback(() => {
        setData([
            ...data,
            text
        ])
        setText('')
    },[data,text]) 

    const textSize = useMemo(() => {
         return text.length
    },[text]) 

    return (
        <div>
            <h1>useCallback / useMemo</h1>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <button onClick={onAdd}>추가</button>
            <h2>내용 : {text} / 길이 : {text.length}</h2>
            <hr/>
            <h2> 길이 : {textSize}</h2>
            <hr/>
            {
                data.map((item, index) => <p key={index}>
                    {index}/{item}
                </p>)
            }
        </div>
    );
};

export default Test4;