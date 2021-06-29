import React, { useState, useRef } from 'react';

const Test1 = () => {
    const [data,setData] = useState([
        {id:1, text:'영화보기'},
        {id:2, text:'바다가기'},
        {id:3, text:'한강가기'},
    ])
    
    

    const no = useRef(4)
// 기존 리스트가 3까지 있기때문에 4부터 적어줌
    const onAdd = (text) => {
        setData([
            ...data,
            {
                id:no.current++,
                text : text
            }
        ])
    }
    // 데이터가 있는곳이서 삭제가 이루어져야 함
    const onDel=(id)=>{
        setData(data.filter (item => item.id !== id))
    }

    return (
        <div>
            <h1>할일 만들기</h1>
            <Form onAdd={onAdd}/>
            <List data={data} onDel={onDel}/>
        </div>
    );
};

const Form = ({onAdd}) => {
    const [text,setText] = useState('')

    const changeInput = (e) =>{
        const {value} = e.target
        setText(value)
    }
    const click = () =>{
        onAdd(text)
    }

    return (
        <div>
            <input type="text" value={text} onChange={changeInput}/>
            <button onClick={click}>추가</button>
        </div>
    );
};

const List = ({data,onDel}) => {
    return (
        <div>
            {
                data.map(item => <Item key={item.id} item={item} onDel={onDel}/>)
            }
        </div>
    );
};

const Item = ({item,onDel}) => {
    const {id,text} = item
    
    return (
        <div>
            {id} / {text}
            {/* 값을 내려받는게 아니라 거꾸로 올려줄때에는 이벤트 = { () => 속성(값) } 의 콜백 형식으로 적어준다 */}
            <button onClick={()=>onDel(id)}>삭제</button>
        </div>
    );
};


export default Test1;