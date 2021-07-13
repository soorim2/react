import React, { useState } from 'react';

const Test7 = () => {   
    const [chk, setChk] = useState(false);
    const changeInput = (e) => { //체인지 할 떄 이벤트를 발생해라
        const {checked} = e.target 
        setChk(checked)

    }
    return (
        <div style={{color: chk ? 'red' : 'black'}}>
            <input type='checkbox' checked={chk} onChange={changeInput}/>
            오늘은 수요일 입니다.
        </div>
    );
};

export default Test7;