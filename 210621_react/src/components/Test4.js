import React, { useState } from 'react';
import Test4Animal from './Test4Animal';
import Test4Display from './Test4Display';
import Test4Name from './Test4Name';


const Test4 = () => {
    const [name, setName] = useState('')
    const [ani, setAni] = useState('')

    const changeName = (e) => {
        const {value} = e.target
        setName(value)
    }
    const changeAni = (e) => {
        const {value} = e.target
        setAni(value)
    }
    return (
        <div>
            <Test4Name name={name} changeName={changeName}/>
            <hr/>
            <Test4Animal ani={ani} changeAni={changeAni}/>
            <hr/>
            <Test4Display name={name} ani={ani}/>
        </div>
    );
};

export default Test4;