import React, { useState } from 'react';

const useRefStudy = () => {
    const [gauge, setGauge] = useState(0)

    const changeGauge = (e) => {
        const {value} = e.target
        setGauge(value)
    }

    const onReset = () => {
        setGauge(0)
    }

    const rangeStyle = {
        width: '80%'
    }
    return (
        <div>
            <form>
                {/* <input type="text" name="name" placeholder="이름"/>
                <input type="text" name="nickname" placeholder="닉네임"/> */}
                <input type="range" min="0" max="100" step="1" value={gauge} onChange={changeGauge} style={rangeStyle}/>
                <input type="file" multiple/>
                <button onClick={onReset}>초기화</button>
            </form>
            <h4>{gauge}%</h4>
        </div>
    );
};

export default useRefStudy;