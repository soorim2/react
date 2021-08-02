import React, { useReducer } from 'react';

const initialState = 0

const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT' :
            return state + 1
        case 'DECREMENT' :
            return state - 1
        case 'RESET' :
            return 0
        default :
        return state
    }
}

const Test8 = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
     // count = state, dispatch = action 
    return (
        <div>
            <h2>출력 : {count}</h2>
            <p>
                <button onClick={ () => dispatch({type:'INCREMENT'}) }>증가</button>
                <button onClick={ () => dispatch({type:'DECREMENT'}) }>감소</button>
                <button onClick={ () => dispatch({type:'RESET'})}>초기화</button>
            </p>
            <p>
                {/* 액션명은 대문자 권장 */}
                증가 : INCREMENT,
                감소 : DECREMENT,
                초기화 : RESET
            </p>
        </div>
    );
};

export default Test8;

/*
    1. 액션명 정의 (type)
    2. 상태 업데이트 로직을 담은 함수
        const 함수명 = (state, action) =>{
            switch( acation.type ){
                case '액션명' : return 값
            }
        }
    3. const [상태값, dispatch] = useReducer(reducer,initialState);
        dispatch: 액션을 발생시키는 함수(액션을 보내기)
        reducer: 상태 업데이트 로직을 담은 함수
        initialState: 초기값

    4. 이벤트 = { () => dispatch({ type:'액션명' }) }
        type은 필수
*/