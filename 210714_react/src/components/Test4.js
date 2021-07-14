import React from 'react';
import styled,{css} from 'styled-components'

const Container = styled.div`
    border:1px solid #000;
    padding:20px;
    margin:20px;
    background: ${props => props.bg ? props.pg : 'yellow'}; 
    width:${props => props.w};
`
/* 
    ${Container의 모든 속성값을 받아서 처리한다.}
    ${props => 원하는 속성}
    삼항연산자 사용가능
*/


const Box = styled.button`
    width:${props => props.width ? props.width: '50px'};
    background: ${props =>props.bg ? props.bg : 'salmon'};
    height:30px;
    /* 주어진 속성의 css만 다시 설정 가능*/
    ${props => props.good && css`
        background:green;
        width:300px;
        color:#fff;
        height:50px; border:none;
        transition:1s;
        &:hover{
            background:gray;
            color:#000;
        }
    `} 
    /* good이라는 프롭스를 가졌다면 css 를 다시 설정 하겠다*/
`

const Test4 = () => {
    return (
        <Container w="600px" bg="pink" >
            <Box width="200px">Test</Box>
            <Box width="150px" bg="yellow">Test</Box>
            <Box>Test</Box>
            <Box bg="#eee">Test</Box>
            <Box width="100px">Test</Box>
            <Box good>Test</Box>
        </Container>
    );
};

export default Test4;