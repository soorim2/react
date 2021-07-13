import React, { useState } from 'react';

const Test5 = () => {
    const [data, setData] = useState([])
    // {id:1, name:'홍길동'}
    const onAdd = () => {
        const newData = {id: data.length, name:'임지수'+Math.floor(Math.random()*10)}
        setData([
            ...data,
            newData
        ])
    }
    const onAdd1 = () => {
        setData(
            data.concat({id:data.length, name:'홍길동' +Math.floor(Math.random()*10)})
            )
        }
        const onAdd2 = () => {
        const newData = data.concat({id:data.length, name:'홍길동' +Math.floor(Math.random()*10)})
        setData(newData)
    }
    const onAdd3 = () => {
        setData([
            ...data,
            {id: data.length, name:'임지수'+Math.floor(Math.random()*10)}
        ])
    }
    return (
        <div>
            <button onClick={onAdd}>데이터 추가</button>
            {
                data.map((item)=><p key={item.id}>{item.id} / {item.name}</p>)
            }
        </div>
    );
};

export default Test5;