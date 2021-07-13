import React, { useState, useEffect } from 'react';

const Test6 = () => {
    const[count,setCount] = useState(0)
    const[done,setDone] = useState(true)
    const toggleCount = () => {
        setDone(!done)
    }
    const onReset = () =>{
        setCount(0)
    }   
    
    useEffect(()=>{
        let timer =null
        if(done) {
             timer = setInterval(()=>{
                setCount(state=>state+1)
            },1000)
        } else if (!done && count ===0){
            clearInterval(timer)
        }
        return()=> {
            console.log('clear count')
            clearInterval(timer)
        }
            
    },[done,count])
    // },[done])


    return (
        <div>
            <h1>카운트 : {count}</h1>
            <button onClick={toggleCount}>
                {
                    done ? '중지' : '시작'
                }
                </button>
            <button onClick={onReset}>초기화</button>
        </div>
    );
};

export default Test6;