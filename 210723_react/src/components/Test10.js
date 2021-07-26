import React, { useReducer } from 'react';

//초기값
const initialState = {width:100}
//분리
const reducer = (state, action)=>{
    switch(action.type){
        //초기값이 객체이기 때문에 return 값도 객체
        case 'PLUS' : return {width: state.width + action.step} 
        case 'MINUS' : return {width: state.width - action.step}
        case 'RESET' : return {width:100}
        default : return state
    }
}

const Test10 = () => {
    const [state, dispacth] = useReducer ( reducer, initialState )
    // state.width
    return (
        <div>
            <div style={{width:state.width, height:100,background:'salmon',margin:10,transition:'0.3s'}}></div>
            <p>
                <button onClick={()=>dispacth({type:'PLUS' ,step:30})}>증가</button>
                <button onClick={()=>dispacth({type:'MINUS', step:20})}>감소</button>
                <button onClick={()=>dispacth({type:'RESET'})}>초기화</button>
            </p>
        </div>
    );
};

export default Test10;