import React from 'react'

import styled from 'styled-components';


interface Props {
    bgcolor:string
    current:number
    total:number
}

const Container = styled.div`
height: 20px;
width: 100%;
background-color: #e0e0de;
border: 1px solid black;
border-radius: 50px;
margin: 50px;
`
const Label = styled.span`
padding:5px;
color:black;
font-weight:bold;
`


const ProgressBar = (props: Props) => {

    const { bgcolor, current, total } = props;

    const completed = Math.round(current / total * 100);

    const Filler = styled.div`
height: 100%;
width: ${completed}%;
background-color: ${bgcolor};
border-radius: inherit;
text-align: center;
transition:width 1s ease-in-out;
font-family:sans-serif;
`

    
    return (
        <Container>
      <Filler>
       <Label>{`${completed}%`}</Label>
      </Filler>
    </Container>
    )
}

export default ProgressBar
