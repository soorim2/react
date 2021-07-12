import React, { useState, useEffect } from 'react';

const Test2 = () => {
    const dataList = [
        {id:1, name:'아버지가 방에 들어가신다'},
        {id:2, name:'간장공장 공장장'},
        {id:3, name:'기린'},
        {id:4, name:'풍선'},
        {id:5, name:'빗자루'},
        {id:6, name:'sop'},
        {id:7, name:'powder'},
        {id:8, name:'HTML'},
        {id:9, name:'Covid'},
        {id:10, name:'스티커'},
    ]
    const [data, setData]=useState(dataList)
    const [text,setText] =useState('')

    const changeInput =(e)=>{
        const {value} = e.target
        setText(value)
    }

    const click1 = () =>{
        // 소문자로 바꾸고 대소문자 상관없이 필터
        // setData( dataList.filter(item=>item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1))
        // setData(dataList.fill(item=>item.name.toLowerCase().includes(text.toLowerCase())))
        setData(dataList.filter(item => { 
            const re = new RegExp(text,'ig')//정규표현식
            return item.name.match(re)

        }))
    }

    useEffect(()=>{ //텍스트가 바뀔때마다 실시간으로 필터
        setData(dataList.filter(item=>{
            const re= new RegExp(text, 'ig')
            return item.name.match(re)
        }))
    },[text])

    return (
        <div>
            <div>
                <input type="text" placeholder="검색어를 입력하세요." value={text} onChange={changeInput}/>
                <button onClick={click1}>검색</button>
                <hr/>
                <ul>
                    {
                        data.map(item => <li key={item.id}>
                            {item.id}/{item.name}
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Test2;