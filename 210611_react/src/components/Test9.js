import React, { useState } from 'react';

const Test9 = () => {
    const [name, setName] = useState('이름을 선택하세요')
    const onName1 = () => {
        setName('홍길동')
    }
    const onName2 = () => {
        setName('강호동')
    }
    return (
        <div>
            <h2>이름 : {name}</h2>
            <button onClick={onName1}>홍길동</button>
            <button onClick={onName2}>강호동</button>
        </div>
    );
};

export default Test9;

/*
    js에서 변수 : 변하는 값을 저장하는 저장공간
    var name ="홍길동" =>  name 이벤트가 발생했을 때 name="강호동"으로 변경하겠다.
    변하는 (유동) 값을 저장하는 저장 공간 : 변수
    ------------------------------------------------------------------
    유동으로 변하는 값을 처리 할 경우 useState 상태변수
    문법 :
    const [변수, 변수 값의 변경을 도와주는 함수] = useState(초기값)
    const [name, aaa] = useState('아무개')
    name = "아무개"
    name = aaa('홍길동') => name="홍길동"이 된다.
    
    const [사용자이름 ,set대상사용자이름] = useState(초기값)
    const [name, setName] = useState('아무개')
    setName('홍길동') => name='홍길동'
    
    setName(식,값) 으로 응용 가능
*/