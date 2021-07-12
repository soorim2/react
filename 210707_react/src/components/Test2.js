import React, { useState } from 'react';
import Test2Sub from './Test2Sub';

const Test2 = () => {
    const [isShow, setIsShow] = useState(false)
    const [msg, setMsg] = useState('')

    const showMsg = (text,bool) => {
        setIsShow(bool)
        setMsg(text)
    }

    const onMsg1 = () => {
        const result = window.confirm('전부 삭제 하시겠습니까?')
        if(result){
            
            showMsg('예 전부 삭제합니다.', true)
            setTimeout(()=>{

            },3000)
        }else{
            return
        }
    }
    const onMsg2 = () => {
        const result = window.confirm('전부 복구 하시겠습니까?')

        if(result){
            showMsg('예 전부 복구합니다.', true)
            // setIsShow(true)
            // setMsg('예 전부 복구합니다.')
        }else{
            return
        }
    }

    return (
        <div>
            <p>
                <button onClick={onMsg1}>출력1</button>
                <button onClick={onMsg2}>출력2</button>
            </p>
            {
                isShow && <Test2Sub msg={msg} setIsShow={setIsShow}/>
            }
        </div>
    );
};

export default Test2;