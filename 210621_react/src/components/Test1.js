import React, { useState } from 'react';
import './Test1.css'
const Test1 = () => {
    const [age, setAge]= useState(10);
    const [isColor, setIsColor] = useState(false);
    
    const onColor = () => {
        setIsColor(!isColor)
    }
    const onAgeUp = () => {
        setAge(age + 1)
    }
    const onAgeDown = () => {
        setAge(state => state-1)
        setAge(state => state-1)
    }
    return (
        <div className= {`wrap ${isColor ? 'mediumturquoise' : 'pink'}`}>
            <h2>나이 : {age} 살</h2>
            <h2>배경색 : {isColor} </h2>
            <p>
                <button onClick={onColor}>배경색</button>
                <button onClick={onAgeUp}>나이 증가</button>
                <button onClick={onAgeDown}>나이 감소</button>
            </p>
        </div>
    );
};

export default Test1;