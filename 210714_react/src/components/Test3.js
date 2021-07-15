import React from 'react';
import styled from 'styled-components'

/*
    const 스타일컴포넌트 = styled.태그₩₩
    const 스타일컴포넌트 = styled('태그')₩₩
*/
const Container = styled.div`
    width:300px; padding:20px;border:1px solid #000;
    margin:15px;
`
const Box1 = styled.section`
    padding:20px;background: #fafafc; transition:0.5s;margin-bottom:15px;
    /* sass베이스이기때문에 sass설치필수, sass 문법 사용가능 */
    &:hover{
        background:salmon;
    }
`
const Box2 = styled('article')`
    padding:15px; background:tomato; width:100%;box-sizing: border-box;
    transition:1s;
    &:hover{
        background:red;
        width:150%;
        margin-bottom:10px;
    }
`
const Box3 = styled('div')`
    width:100%; height:100px; background:yellowgreen;
    margin:10px 0;
    transition:1s;
    &:hover{
        border-radius:30px 30px 0 0;
        background:navajowhite;
    }
`
const Button = styled.button`
    width:150px; background:#000;color:#fff;
    height:80px; border:none;
`
const Test3 = () => {
    return (
        <Container>
           <Box1>안녕하세요</Box1> 
           <Box2>안녕하세요</Box2> 
           <Box3>안녕하세요</Box3> 
           <Button>확인</Button>
        </Container>
    );
};

export default Test3;