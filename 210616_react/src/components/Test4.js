import React, { useRef } from 'react';
// 비추천
const Test4 = () => {
    const idRef = useRef()
    const pwRef = useRef()
    const click = () => {
        const data = {
            id : idRef.current.value,
            pw : pwRef.current.value,
        }

        console.log(data)
        //JSON.stringify(value[,replacer[,space]])
        const json = JSON.stringify(data, null, 5)
        console.log(json)
    }
    return (
        <div>
            <h3>useRef 설명용. 예제로는 적절하지 않다. (수업용)</h3>
                <input type='text' ref={idRef}/>
                <input type='text' ref={pwRef}/>
                <button onClick={click}>확인</button>
            </div>
    );
};

export default Test4;