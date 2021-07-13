import React, { useState } from 'react';

const Test4 = () => {
    const [count, setCount] = useState(0)

    const increment1= () =>{
        setCount(count+1)
    }
    const dicrement1= () =>{
        setCount(count-1)
    }
    
    const increment2 = () => {
        // 일괄, 동시 , 배치 처리
        // setCount (받는변수=> 받는변수+1)
        // setCount (이전값=> 이전값+1)
        setCount(state => state+1)
        setCount(prevCount => prevCount+1)
    }
    const decrement2 = () => {
        // setCount(count-1)
        // setCount(count-1)
        // setCount(state => state-1)
        // setCount(prevCount => prevCount-1)
        for(let i=0; i<2; i++){
            setCount(prevCount=> prevCount-1)
        }
    }
    return (
        <div>
            <h2>count : {count}</h2>
            <p>
                <button onClick={increment1}>증가</button>
                <button onClick={dicrement1}>감소</button>
            </p>
            <p>
                <button onClick={()=>setCount(count+1)}>증가</button>
                <button onClick={()=>setCount(count-1)}>감소</button>
            </p>
            <p>
                <button onClick={increment2}>2씩 증가</button>
                <button onClick={decrement2}>2씩 감소</button>
            </p>
        </div>
    );
};

export default Test4;