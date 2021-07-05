import React, { useState, useEffect } from 'react';

const Test5 = () => {
    const [count, setCount] =useState(0)
    const [step, setStep] =useState(1)
    
    //화면에 그려진 후 1초 단위로 출력
    // input에 입력한 초 단위로 출력
    useEffect(()=>{
        console.log('useEffect')
        const timer = setInterval(()=>{
            setCount(count => count+step)
        },1000)
        return()=>{
            console.log('뒷정리')
            clearInterval(timer)
        }
    },[step])//step이 바뀔 때 마다 갱신

    const changeInput=(e)=>{
        const {value} = e.target
        setStep(Number(value))
    }

    return (
        <div>
            <input type="text" value={step} onChange={changeInput}/>
            <h1>출력 : {count}</h1>
        </div>
    );
};

export default Test5;