import React from 'react';

const TodoItem = ({todo,onDel,onToggle}) => {
    const{id,text,done} = todo
    return (
        <li className={done?'on':''}>
            {/* 각자 개별적으로 변경해야 하기 때문에 id를 전달하여 같은번호에 해당하는 done값을 수정해준다 */}
            <span onClick={()=>onToggle(id)}>&#10003;</span>
            <em onClick={()=>onToggle(id)}> {text} </em>
            <button onClick={()=>onDel(id)}>&#10007;</button>
        </li>
    );
};

export default TodoItem;