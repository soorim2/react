import React, { useReducer } from 'react';

//초기값
const initialState = 0

//리듀서 - 로직분리 (=액션분리)
const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT' :
            return state + action.step
        case 'DECREMENT' :
            return state - action.step
        default :
            return state
    }
}


const Test9 = () => {
    const [count1, dispatch1] = useReducer(reducer, initialState)
    const [count2, dispatch2] = useReducer(reducer, 100)
    const [count3, dispatch3] = useReducer(reducer, 200)
    return (
        <div>
            <h2>출력 : {count1}</h2>
            <p>
                <button onClick={()=>dispatch1({type:'INCREMENT', step:10})}>증가</button>
                <button onClick={()=>dispatch1({type:'DECREMENT', step:50})}>감소</button>
            </p>
            <hr/>
            <h2>출력 : {count2}</h2>
            <p>
                <button onClick={()=>dispatch2({type:'INCREMENT', step:100})}>증가</button>
                <button onClick={()=>dispatch2({type:'DECREMENT', step:200})}>감소</button>
            </p>
            <hr/>
            <h2>출력 : {count3}</h2>
            <p>
                <button>증가</button>
                <button>감소</button>
            </p>
            <hr/>
        </div>
    );
};

export default Test9;

/*
    dispatch({type : '액션명'}) - type 필수
    dispatch({type : '액션명', 키:값, 키:값}) - action.type, action.키

*/