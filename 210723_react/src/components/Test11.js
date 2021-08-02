import React, { useReducer, useEffect } from 'react';

import axios from 'axios'

//초기값
const initialState = {
    loading : true,
    data:{},
    error: '',
}
//로직분리
const reducer = (state, action) => {
    switch(action.type){
        case 'SUCCESS' : 
            return {
                loading:false,
                data:{},
                error:''
            }
        case 'ERROR' : 
            return {
                loading:true,
                data:action.payload,
                error:'데이터를 찾을 수 없습니다.'
            }
        default : 
            return state
    }
}


const Test11 = () => {
    const [state, dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos/2')
        .then(res => { //성공했을때
            dispatch({type:'SUCCSESS', payload : res.data})
        })
        .catch(error =>{ //실패했을때
            dispatch({type:'ERROR'})
        })
    },[])

    return (
        <div>
            <h2>
                {
                    state.data&& state.loading ? '로딩중' : state.data.title
                }
            </h2>
            <p>
                {
                    state.error ? state.error : null
                }
            </p>
        </div>
    );
};

export default Test11;
