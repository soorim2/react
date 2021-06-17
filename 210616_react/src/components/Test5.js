import React, { useRef } from 'react';

const Test5 = () => {
    const colorRef = useRef(null)

    const onColor = ()  => {
        const data = {
            color: colorRef.current.value 
        }
        console.log( data )
        const json  = JSON.stringify( data, null , 5 )
        console.log( json )
    }
    return (
        <div>
            <h2>컬러선택</h2>
            <select  ref={ colorRef }>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="pink">pink</option>
                <option value="skyblue">skyblue</option>
                <option value="tomato">tomato</option>
            </select>
            <button onClick={onColor} > 선택 </button>
        </div>
    );
};

export default Test5;