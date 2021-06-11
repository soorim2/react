import React from 'react';

const Test7 = () => {
    const click1 =()=>{
        alert('클릭1')
    }
    const click2 =()=>{
        alert('클릭2')
    }
    // const click2 = 여기서부터>>>()=>{
    //     alert('클릭2') <<< 여기까지
    // 간단한 함수의 경우 아래 클릭 3,4처럼 사용 가능
    // }
    return (
        <>
            <h2>이벤트 사용법</h2>
            <div>
                {/* <button onClick={함수명}>클릭1</button> */}
                <button onClick={click1}>클릭1</button>
                <button onClick={click2}>클릭2</button>
            </div>
            <div>
                <button onClick={()=>alert('클릭3')}>클릭3</button>
                <button onClick={()=>alert('클릭4')}>클릭4</button>
            </div>
        </>
    );
};

export default Test7;