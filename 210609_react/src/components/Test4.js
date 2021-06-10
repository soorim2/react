import React from 'react';

const Test4 = () => {
    const style1 = {
        backgroundColor:'#c0a3ea',
        fontSize:30,
        color:'green'
    }

    return (
        <div>
            <p style={style1}>지금은 연습중</p>
            <p style={{backgroundColor:'tomato',padding:5,fontSize:50, textAlign:"center"}}>지금은 연습중</p>
            <p>지금은 연습중</p>
            <p>지금은 연습중</p>
            <p>지금은 연습중</p>
        </div>
    );
};

export default Test4;