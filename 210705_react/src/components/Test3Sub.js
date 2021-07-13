import React, { useState, useEffect } from 'react';

const Test3Sub = () => {
    const [x, setX] =useState(0)
    const [y, setY] =useState(0)
    
    const move =(e)=>{
        setX(e.clientX)
        setY(e.clientY)
    }
    //화면에 그려진 후
    useEffect(()=>{
        // console.log('useEffect')
        window.addEventListener('mousemove',move)
        //뒷정리
        return() =>{
            window.removeEventListener('mousemove',move)
        }
    },[])
    return (
        <div>
            <h2>마우스 좌표</h2>
            <div style={{width:500, height:140, fontSize:50, margin:20, textAlign:'center',border:'1px solid #444', lineHeight:'140px'}}>
                X : {x} / Y : {y}
            </div>
        </div>
    );
};

export default Test3Sub;