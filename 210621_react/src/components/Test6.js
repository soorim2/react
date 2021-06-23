import React, { useState, useRef } from 'react';

const Test6 = () => {
    const [data, setData] = useState([])
    //고유번호
    const no = useRef(1)

    //문자열을 배열로 변경하려면 ?
    //쉼표를 기준으로 잘라내기 split

    const names= '임지수,찐빵이,모래,달무,아리,부끄,달밤,오복,다복'.split(',')

    const onAdd = () => {
        const ran = Math.floor(Math.random()*names.length)
        setData([
            ...data,
            {
                id: no.current++,
                text : names[ran]
            }
        ])
        
    }
    return (
        <div>
            <h2>고유번호</h2>
            <button onClick={onAdd}>추가</button>
            <ul>
                {
                    data.map((item)=>
                        <li key={item.id}>
                            {item.id} / {item.names}
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Test6;