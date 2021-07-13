import React, { useState } from 'react';

const Name = () => {
    const [text, setText] = useState('');
    return (
        <div>
            <h2>Name component</h2>
            <p>
                <label>이름 : </label>
                <input type="text" value={text} onChange={e => setText(e.target.value)}/>
                <span style={{marginLeft:15}}> {text}</span>
            </p>
        </div>
    );
};

const Animal = ({ani,changeInput}) => {
    return (
        <div>
            <h2>Animal component</h2>
            <p>
                <label>좋아하는 동물 : </label>
                <input type="text" value={ani} onChange={changeInput}/>
                <span style={{marginLeft:15}}> {ani}</span>
            </p>
        </div>
    );
};

const Display = ({ani}) => {
    return (
        <div>
            <h2>Display component</h2>
            <h2>내가 좋아한느 동물은 {ani} 입니다</h2>
        </div>
    );
};

const Test3 = () => {
    const [ani, setAni] = useState('강아지');
    const changeInput = (e) => {
        const {value} = e.target
        setAni(value)
    }
    return (
        <div>
            <Name/>
            <hr/>
            <Animal ani={ani} changeInput ={changeInput}/>
            <hr/>
            <Display ani={ani}/>
        </div>
    );
};

export default Test3;