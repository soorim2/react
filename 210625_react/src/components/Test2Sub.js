import React from 'react';

const Test2Sub = ({onAdd,onDel}) => {
    return (
        <div>
            <h3>이름 추가</h3>
            <p>
                <button onClick={()=>onAdd('통기타')}>통기타</button>
                <button onClick={()=>onAdd('화병')}>화병</button>
                <button onClick={()=>onAdd('향수')}>향수</button>
            </p>
            <h3>이름 삭제</h3>
            <p>
                <button onClick={()=>onDel(1)}>홍길동</button>
                <button onClick={()=>onDel(3)}>도자기</button>
                <button onClick={()=>onDel(4)}>아스파라거스</button>
            </p>
        </div>
    );
};

export default Test2Sub;