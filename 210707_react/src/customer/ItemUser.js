import React from 'react';

const ItemUser = ({user,onDel,onEdit}) => {
    const {id, name, job} = user
    return (
        <tr>
            <td>{name}</td>
            <td>{job}</td>
            <td>
                {/* 수정을 눌렀을 때  */}
                <button onClick={()=>onEdit(user)}>수정</button> 
                <button onClick={()=>onDel(id)}>제거</button>
            </td>
        </tr>
    );
};

export default ItemUser;