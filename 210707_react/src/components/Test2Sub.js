import React, { useEffect } from 'react';

//출력버튼을 누르면 메세지 3초동안 보이고 사라지기
const Test2Sub = ({msg,setIsShow}) => {

    useEffect( () => {
        const timer = setTimeout( () => {
            setIsShow(false)
        },3000)
        return() => {
            clearTimeout(timer)
        } 
    },[])

    return (
        <div style={{backgroundColor:'dodgerblue',padding:15,margin:30,fontSize:25}}>
            메세지: {msg}
        </div>
    );
};

export default Test2Sub;