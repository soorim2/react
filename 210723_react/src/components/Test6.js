import React, { useState, useCallback } from 'react';
import Test6Sub from './Test6Sub';
import Test6Title from './Test6Title';

const Test6 = () => {
    const [age, setAge] = useState(20)
    const [money, setMoney] = useState(200)

    const onAge = useCallback(()=>{
        setAge(age + 1)
    },[age])

    const onMoney = useCallback(()=>{
        setMoney(money + 110)
    },[money])

    return (
        <div>
            <Test6Title/>
            <Test6Sub text="나이" count={age}/>
            <button onClick={onAge}>나이증가</button>
            <hr/>
            <Test6Sub text="급여" count={money}/>
            <button onClick={onMoney}>급여증가</button>
        </div>
    );
};

export default Test6;