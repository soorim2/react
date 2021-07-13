import React, { useState } from 'react';

const Test1 = () => {
    const[] = useState();
    const onAdd1 = () => {
        alert('test')
    }
    const onAdd2 = (text) => {
        alert(text)
    }
    return (
        <div>
            <button onClick={onAdd1}>확인1</button>
            {/* <button onClick={onAdd2('안녕')}>확인2</button> */}
            {/* 함수에 값을 바로 전달 할 경우에는 바로 호출이 되기때문에 함수로 묶어준 후 사용해야 실행되지 않는다.  */}
            <button onClick={() => onAdd2('안녕')}>확인2</button>
        </div>
    );
};

export default Test1;