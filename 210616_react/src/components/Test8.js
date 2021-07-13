import React, { useState } from 'react';

const Test8 = () => {
    const [chk, setChk] = useState(false)
    const changeInput = (e) => {
        const {checked} = e.target
        setChk(checked)
    }
    return (
        <>
            <p>
                <input type='checkbox' checked={chk} onChange={changeInput}/>
                {
                    chk ? '보이기' : '숨기기'
                }
            </p>
            {/* {
                chk ? 
                <div style ={{width:400,height:100,backgroundColor:'tomato',margin:30}}>
                </div> : ''
            } */}
            {
                chk &&
                <div style ={{width:400,height:100,backgroundColor:'tomato',margin:30}}>
                </div> 
            }
        </>
    );
};

export default Test8;