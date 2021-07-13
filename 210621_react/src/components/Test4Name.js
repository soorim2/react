import React from 'react';

const Test4Name = ({name,changeName}) => {
    return (
        <div>
            <label>이름 : </label>
            <input type="text" onChange={changeName}/>
            <span style={{marginLeft:20}}>{name}</span>
        </div>
    );
};

export default Test4Name;