import React, { useState, useCallback } from 'react';

/*
    useCallback(fn, deps) - 함수자체
    렌더링할때마다 함수를 다시 생성한다.
*/

const Test3 = () => {
    const [count, setCount] = useState(1)
    // console.log('test')
    
    const ran = Math.random()

    const increment = useCallback( () => {
        console.log(ran)
        setCount(count + 1)
    }, [count])
    const decrement = useCallback( () => {
        console.log(ran)
        setCount(count - 1)
    }, [count])
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>증가</button>
            <button onClick={decrement}>감소</button>
        </div>
    );
};

export default Test3;