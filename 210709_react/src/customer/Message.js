import React, { useEffect } from 'react';

const Message = ({msg, isShow,setIsShow}) => {
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setIsShow(false) 
        },2500)
        return()=>{
            clearTimeout(timer)
        }
    },[isShow]) //isShow 변경될때마다 실행
    return (
        <div className={`message ${isShow ? 'on' : ''} `}>
            {msg}
        </div>
    );
};

export default Message;