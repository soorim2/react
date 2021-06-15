import React, { useState } from 'react';
import './Test5.css'

const Test5 = () => {
    const [isActive,setIsActive] = useState(false)
    const onAdd=()=>{
        setIsActive(true)
    }
    const onRemove=()=>{
        setIsActive(false)
    }
    const onToggle=()=>{
        setIsActive(!isActive)
    }

    return (
        <div className="wrap">
            <div>오늘은 월요일 입니다.</div>
            <div className="test">오늘은 월요일 입니다.</div>
            <div className={isActive?'on':''}>오늘은 월요일 입니다.</div>
            <div className={`test ${isActive?'on':''}`}>오늘은 월요일 입니다.</div>

            <p>
                <button onClick={onAdd}>addClass</button>
                <button onClick={onRemove}>removeClass</button>
                <button onClick={onToggle}>toggleClass</button>
            </p>
        </div>
    );
};

export default Test5;