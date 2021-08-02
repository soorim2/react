import React from 'react';
import { useParams } from 'react-router-dom';

const Front = ({data}) => {
    // const {:/사용자정의이름} = useParams()
    // <Route path=""> 에서 정의한
    const {name} = useParams()
    return (
        <div>
            <h2>Front page입니다.</h2>
            {
                data.filter(item=> item.title === name)
                    .map((item, index) => (
                        <div key={index}>
                            <h2>{item.title}</h2>
                            <h3>{item.info}</h3>
                        </div>
                    ))
            }
        </div>
    );
};

export default Front;