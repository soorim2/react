import React, { useState } from 'react';

const Test7 = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>숫자: {count}</h1>
            <button>증가</button>
            <button>감소</button>
            <button>초기화</button>
        </div>
    );
};

export default React.memo(Test7);

/*
    https://ko.reactjs.org/docs/hooks-reference.html#usereducer

    1.액션명 : 별칭 -  증가별칭, 감소별칭, 초기화별칭
                    사용자 정의 이름 : 한글,영문 대소문자 가능
                    주로 상수형 영문 대문자로 쓰는게 좋다.
                    증가 : INCREMENT
                    감소 : DECREMENT
                    초기화 : RESET

    2.const 함수A = (state, action) =>{
        switch(action.type){
            case xxx
        }
    }
    
    별칭에 대한 경의수를 분기형 : switch ~ case 
    switch (action.type) {
        case 'INCREMENT':
        return count + 1;
        case 'DECREMENT':
        return count - 1;
        case 'RESET':
        return 0
        default:
        return state
    }   
    
    3. 
        const [count, setCount] = useState(0)
        이걸
        const [count,dispatch] = useReducer(함수A, 초기값);

        dispatch : 액션 전달자

        type 필수
        onClick={()=> dispatch({type:'INCREMENT'})}
 */