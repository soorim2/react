import React, { useState } from 'react';
// import styled,{css} from 'styled-components'
import styled from 'styled-components'

const Container = styled.div`
    border:1px solid #000;
    padding:20px;
    width:${props => props.width};
    h2{
        font-size:50px
    }
`
const Button = styled.button`
    margin:5px; font-size:40px;
    padding:10px 30px ;
    cursor: pointer;
    outline:none;
    border:none;
    &.up::after{content:"📤"}
    &.down::after{content:"📥"}

    &:hover{
        background:tomato;
    }
    &:disabled{
        filter:grayscale(100%);
        background:#999;
        cursor:not-allowed;
    }
`

const Test5 = () => {
    const [count,setCount] = useState(1)
    const increment=()=>{
        setCount(count > 10 ? 10 : count+1 )

    }
    const decrement=()=>{
        setCount(count < 0 ? 0 : count-1 )
    }

    return (
        <Container>
            <h2>숫자 : {count} </h2>
            <Button className="up" onClick={increment} disabled={count===10}></Button>
            <Button className="down"onClick={decrement} disabled={count===0}></Button>
            
        </Container>
    );
};

export default Test5;