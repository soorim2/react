import React, { useState, useEffect } from 'react';

const Test4 = () => {
    const [count,setCount] = useState(1)
    // 1초마다 실행 - setInterval
    
    // useEffect(()=>{
    //     console.log('useEffect')
    //     const timer = setInterval(()=>{
    //         setCount(count+1)
    //     },1000)

    //     return()=>{
    //         console.log('뒷정리')
    //         clearInterval(timer)
    //     }
    // })

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log('timer')
            // setCount(count + 1)
            setCount(count => count + 1)
            // setCount(이전값 => 이전값 +1)
        },1000)
        return()=>{ 
            clearInterval(timer) // setInterval 사용 시 clearInterval 같이 
        }
    },[])
    return (
        <div>
            <h1>출력 : {count}</h1>
        </div>
    );
};

export default Test4;