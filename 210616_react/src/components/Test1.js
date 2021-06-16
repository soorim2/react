import React, { useState } from 'react';

const Test1 = () => {
    const [data, setData] = useState([
        {no:1, name:'이제훈',age:27,done:true},
        {no:2, name:'시크리드',age:1,done:false},
        {no:3, name:'아이패드',age:4,done:false},
        {no:4, name:'두루마리',age:0,done:true},
        {no:5, name:'헤라',age:50,done:true}
    ])
    const onAdd1 = () =>{
        setData(data.concat({no:6, name:'스텐',age:'40',done:true}))
    }
    const onAdd2 = () =>{
        const newData = data.concat(({no:7, name:'아이폰',age:3,done:false}))
        setData(newData)
    }
    const onAdd3 = () =>{
        setData([
            ...data,
            {
                no:8, name:'의자',age:0,done:true
            }
        ])
    }
    const onAdd4 = () =>{
        const newData = { no:9, name:'쿠키',age:12,done:true}
        setData([...data,newData])
    }
    return (
        <div>
            <div>
                <button onClick={onAdd1}>추가</button>
                <button onClick={onAdd2}>추가</button>
                <button onClick={onAdd3}>추가</button>
                <button onClick={onAdd4}>추가</button>
            </div>
            {
                data.map((item, index)=>
                    <div key={index}>
                        <span>{item.name}</span>/
                        <span>{item.age}세</span>/
                        <span>
                            {
                                item.done ?'참':'거짓'
                            }
                        </span>
                    </div>
                )
            }
            <hr></hr>
            {
                data.map((item)=>
                    <div key={item.no}>
                        <h2>{item.name} / {item.age}세</h2>
                    </div>
                )
            }
        </div>
    );
};

export default Test1;