import React from 'react';

// const Sub = (props) => {
//     return (
//         <>
//             <h2>{props.name} 이달의 할 일</h2>
//             <ul>
//                 <li>장소 : {props.place}</li>
//                 <li>날짜 : {props.date}</li>
//                 <li>시간 : {props.time}</li>
//                 <li>내용 : {props.content}</li>
//             </ul>
//         </>
//     );
// };
const Sub = ({name, place, date, time, content}) => {
    //비구조할당
    // const {name, place, date, time, content} = props
    return (
        <>
            <h2>{name} 이달의 할 일</h2>
            <ul>
                <li>장소 : {place}</li>
                <li>날짜 : {date}</li>
                <li>시간 : {time}</li>
                <li>내용 : {content}</li>
            </ul>
        </>
    );
};
const Test4 = () => {
    return (
        <>
        {/* 부모컴포넌트에서 자식컴포넌트에 값을 전달할 때 사용하는 속성 = props */}
        {/* <자식컴포넌트 전송할이름="값" */}
        {/* <자식컴포넌트 사용자정의변수="값" */}
        {/* <자식컴포넌트 사용자정의이름={전송값} 이름={상태값} 이름={함수} */}
            <Sub name="임지수" place="부산" date="2021.06.12" time="am11:30" content="미팅"/>
            <hr/>
            <Sub name="손욱" place="제주" date="2021.06.12" time="pm10:00" content="동창회"/>
            <hr/>
            <Sub name="쥬쥬" place="서울" date="2021.06.20" time="pm02:00" content="쥬쥬총회"/>
        </>
    );
};

export default Test4;