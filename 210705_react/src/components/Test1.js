import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';

const Test1 = () => {
    const [count, setCount] = useState(1)
    const ref1 = useRef()
    const ref2 = useRef()

    const onColor = () => {
        ref1.current.style.color = 'pink'
        ref2.current.style.color = 'green'
        setCount(count + 1)
    }
    //브라우저에 그려진 후
    useEffect(()=>{
        console.log('useEffect')
        ref1.current.style.color='tomato'
    })
//브라우저에 그려지기 전 (useEffect를 더 많이 사용)
//useEffect에 문제가 될 때만 useLayoutEffect 사용
    useLayoutEffect(()=>{
        console.log('useLayoutEffect')
        ref2.current.style.color='skyblue' //화면에 그려지기 전부터 있어서 렌더가 될때 깜빡임조차 없다 (꼼짝도 안함)
    })
    return (
        <div style={{margin:30}}>
            <h1>출력 : {count}</h1>
            <h1 ref={ref1}>useEffact</h1>
            <h1 ref={ref2}>useLayoutEffect</h1>
            <button onClick={onColor}>확인</button>
        </div>
    );
};

export default Test1;

/*
    useEffect
    - 화면에 렌더링 완료 후(그려진 후) 수행
    - 컴포넌트가 렌더링 될 때마다 작업을 수행 
    - 클래스형에 componentDidMount와 componentDidUpdate, componentWillUnmount가 합쳐진 것
    - useEffect ( 콜백함수, []) // 한번만
    - useEffect ( 콜백함수, [의존변수]) // 의존변수가 바뀔 때 마다

    마운트란 ?
    - 리액트에서 특정 컴포넌트를 끼워넣는 행위
        ex) React.rander(App, #root)
            #root dom에 App을 끼워넣기
    
    useEffect 
    - 처음 나타날 때 (화면이 그려질 때)
    - 업데이트 할 때 (특정 props를 많이 사용한다)
        특정 porps가 변경될 때 **
        특정 state가 변경될 때
    - 사라질 때

    문법 1 : mount / update 

    useEffact(()=>{
        실행문
    })

    문법 2 : mount 되었을 때 한번만
    useEffect (()=>{
        실행문
    },[])

    문법 3 : mount /특정 변수가 바뀔 때 마다 update 
    useEffect(()=>{
        실행문
    },[의존변수]) 
    // 의존변수 : props(80%), state

    문법 4 : 
    useEffect(()=>{
        실행문

        //effect 뒷정리 (effect가 발생을 할 때 기존 effect를 제거 한 후 )
        return()=>{
            실행문
        }
    },[의존변수,의존변수]) // 의존변수가 안 들어갈 수도 있고, 여러개 들어갈 수도 있다.
    메모리 누수를 방지하기 위해서 UI컴포넌트를 제거하기 전에 수행한다.
    컴포넌트가 여러번 렌더링 된다면 다음 effect가 수행되기 전에 이전 effect를 정리하고 수행

    사용범위
    1. props로 받은 값을 처리할 때
    2. 외부 API(axios, fetch) - 외부 json 호출
    3. setInterval, setTimeout 
    4. 외부 라이브러리 사용

*/