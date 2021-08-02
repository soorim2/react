import React, { useState, useEffect, useMemo } from 'react';

/*
  useMemo - return 값을 기억
  useMemo (()=> fn, deps)

  useCallback - 함수자체를 기억
  useCallback (()=> fn, deps)
*/
const user = [
    {id:1, name:'임지수'},
    {id:2, name:'LimjISu'},
    {id:3, name:'soOrim'},
    {id:4, name:'수림'},
    {id:5, name:'plant'},
    {id:6, name:'모나미'},
    {id:7, name:'modami'},
    {id:8, name:'bLock'},
    {id:9, name:'puzZle'},
    {id:10, name:'BoO'},
]

const Test1 = () => {
    const [text,setText]=useState('')
    const [search,setSearch]=useState('')
    // const [data,setData]=useState(user)

    const onSearch = () =>{
        setSearch(text)
    }
    /* 
        useEffect(()=>{
        setData(user.filter(item=>item.name.toLowerCase().includes(search.toLowerCase())))
        },[search])
    */ 

    //사용자 함수

    const data = useMemo(() =>{
        return user.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    },[search])


    return (
        <div>
            <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
            <button onClick={onSearch}>검색</button>
            <hr/>
            {
                data.map(item => <p key={item.id}>
                    {item.id} / {item.name}
                </p>)
            }
        </div>
    );
};

export default Test1;