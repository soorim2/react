import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';

const Test2 = () => {
    const [text, setText] = useState('')
    const ref1 = useRef()

    // useEffect(()=>{
    //     console.log('useEffect') // 업데이트 될 떄 마다 뜸
    //     ref1.current.focus() 
    // },[]) // 대괄호를 넣어주어 한번만 업데이트 시켜 줌
    useLayoutEffect(()=>{
        console.log('useLayoutEffect') 
        ref1.current.focus() 
    },[]) 
    return (
        <div>
            <input type="text" ref={ref1} onChange={e => setText(e.target.value)}/>
        </div>
    );
};

export default Test2;