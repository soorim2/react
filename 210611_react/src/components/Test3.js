import React from 'react';

const Sub = () => {
    return (
        <>
            <h2>이달의 할 일</h2>
            <ul>
                <li>장소 : 서울</li>
                <li>날짜 : 2021.06.11</li>
                <li>시간 : am10:00</li>
                <li>내용 : 회사 미팅</li>
            </ul>
        </>
    );
};

const Test3 = () => {
    return (
        <>
            <Sub/>
            <hr/>
            <Sub/>
            <hr/>
            <Sub/>
        </>
    );
};

export default Test3;