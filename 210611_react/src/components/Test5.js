import React from 'react';

const Sub = ({name,age,done}) => {
    return (
        <>
            <h3>이름 : {name} ({typeof name})</h3>
            <h3>나이 :{age} ({typeof age}) </h3>
            <h3>로그인여부 : {done ? '로그인' : '로그아웃'} ({typeof done}) </h3>
            {/* true 로그인 / false 로그아웃 */}
            <hr/>
        </>
    );
};
const Test5 = () => {
    const data1 = {name:'강아지', age:2, done:true}
    const data2 = {name:'고양이', age:1, done:false}
    return (
        <>
            {/* 자식컴포넌트 속성명 ="값" 속성명={숫자}  속성명={논리값} 속성명={상태값} 속성명={함수} / 숫자,논리값,상태값,함수는 블럭 안에*/}
            <Sub name="임지수" age={30} done={true}/>
            <Sub name="호크니" age={40} done={false}/>
            <Sub name={data1.name} age={data1.age} done={data1.done}/>
            <Sub name={data2.name} age={data2.age} done={data2.done}/>

            {/* 스프레드 연산자 응용 {...data1} -> {name:'강아지', age:2, done:true} */}
            <Sub {...data1}/>
            <Sub {...data2}/>
        </>
    );
};

export default Test5;