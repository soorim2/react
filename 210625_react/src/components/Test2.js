import React, { useState, useRef } from 'react';
import Test2Sub from './Test2Sub';

const Test2 = () => {
    const no = useRef(6) // 기존 데이터 값이 5번까지 있기 떄문에 6번부터 시작.
    const [data, setData] = useState([
        {id:1,name:'홍길동'},
        {id:2,name:'임지수'},
        {id:3,name:'도자기'},
        {id:4,name:'아스파라거스'},
        {id:5,name:'선인장'},
    ])

    const onAdd = (text) => {
        setData([
            ...data,
            {
                id:no.current++,
                name:text
            }
        ])
    }
    const onDel = (id) => {
        setData(data.filter(item=>item.id !== id))
    }
    return (
        <div>
            {
                data.map(item => <p key={item.id}>
                    {item.id} / {item.name}
                </p>)
            }
            <hr/>
            <Test2Sub onAdd={onAdd} onDel={onDel}/>
        </div>
    );
};

export default Test2;