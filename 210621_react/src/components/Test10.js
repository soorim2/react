import React, { useState } from 'react';
import image from '../assets/api/image'
const Test10 = () => {
    const [data, setData] = useState(image)
    // useState안에 import한 파일(배열로 내보내진) 을 넣으면 바로 사용 가능
    return (
        <div>
            {
                data.map(item => 
                    <article key={item.id}>
                        <h3>이름 : {item.title}</h3>
                        <img src={item.image} alt={item.title} width="300"/>
                    </article>
                    
                )

            }
        </div>
    );
};

export default Test10;