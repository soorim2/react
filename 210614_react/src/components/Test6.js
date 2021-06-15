import React, { useState } from 'react';
import './Test6.css'

const Test6 = () => {
    const [data, setData] = useState([
        {id:1, name:'이제훈',age:30,addr:'서울',done:false},
        {id:1, name:'이제훈',age:30,addr:'서울',done:false},
        {id:1, name:'이제훈',age:30,addr:'서울',done:false},
        {id:1, name:'이제훈',age:30,addr:'서울',done:false},
        {id:1, name:'이제훈',age:30,addr:'서울',done:false},
    ])
    return (
        <div className="wrap">
            <h2>모범택시 배우들</h2>
            <table>
                <colgroup>
                    <col className="w1"></col>
                    <col className="w2"></col>
                    <col className="w3"></col>
                    <col className="w4"></col>
                    <col className="w5"></col>
                </colgroup>
                <thead>
                    <th>번호</th>
                    <th>이름</th>
                    <th>나이</th>
                    <th>주소</th>
                    <th>참여여부</th>
                </thead>
                <tbody>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                </tbody>
            </table>
        </div>
    );
};

export default Test6;