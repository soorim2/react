import React from 'react';

const Test2 = () => {
    //event , e , evt
    const click = (e) => {
        console.log(e.target) // 내가 선택한 대상
        console.log(e.currentTarget) // 이벤트가 걸린 대상
    }
    return (
        <div>
            <h2 onClick={click}>
                <span>확인</span>
                <em>클릭</em>
                <b>누르기</b>
            </h2>
        </div>
    );
};

export default Test2;