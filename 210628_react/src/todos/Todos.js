import React, { useState, useRef } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import './Todos.css'

const Todos = () => {
    const no = useRef(2)
    const[todos, setTodos] = useState([
        {id:1, text:'친구만나기',done:false}
    ])

    const onAdd = (text) => {
        setTodos([
            ...todos,
            {
                id:no.current++,
                text,
                done:false
            }
        ])

    }
    // 삭제
    const onDel = (id) => {
        setTodos(
            todos.filter(todo => todo.id !==id)
        )
    }

    // 토글 (done 처리 갱신,수정)
    const onToggle1 = (id) => {
        setTodos(
            // todos를 돌려서
            todos.map(todo => {
                // 아이디가 같으면
                if(todo.id === id){
                    // 내보낸다.
                    return{
                        // 기존의 배열을 가져온 후,
                        ...todo,
                        // 해당하는 id를 가진 done값을 바꾼다
                        done:!todo.done

                    }
                }else{
                    return todo
                }

            })
        )
    }
    const onToggle=(id)=>{
        setTodos(todos.map(todo =>todo.id ===id?{
            ...todo,done:!todo.done
        }:todo))
    }
    return (
        <div className="Todos">
            <h1>Todo List</h1>
            <TodoInput onAdd={onAdd}/>
            <TodoList todos={todos} onDel={onDel} onToggle={onToggle}/>
        </div>
    );
};

export default Todos;