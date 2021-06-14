import React from 'react';

const Test8 = () => {
    // map 복습
    const title='모범택시'
    const arr = ['이제훈', '이솜', '표예진', '차지연','배유람']

    const data = [
        {id:1, name:'홍길동', age:10},
        {id:2, name:'핑크팬더', age:10},
        {id:3, name:'임지수', age:10},
        {id:4, name:'테레비', age:10},
        {id:5, name:'캐드', age:10},
    ]
    return (
        <div>
            <h2>{title}</h2>
            <p>{arr[0]}</p>
            <p>{arr[1]}</p>
            <hr/>
            {/* {
                arr.map((item,index)=>{
                    return(<p>{index}/{item}</p>)
                })
                //키값이 없어서 오류
            } */}
            {
                arr.map((item,index)=>{
                    return(<p key={index}>{index} / {item}</p>)
                })
            }
            <hr/>
            {arr.map((item, index)=> <p key={index}>{item} / {index}</p>)}
            <hr/>
            {
                data.map( (item,index) => {
                    return (<p key={index}>{item.id } / {item.name} / {item.age}</p>)
                })
            }
            <hr/>
            {/* 위와 같음 블럭여부 차이. */}
            {
                data.map((item,index) =><p key={index}>
                    {item.id} / {item.name} / {item.age}
                </p>)
            }
            <hr/>

        </div>
    );
};

export default Test8;