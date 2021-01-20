import React from 'react'

import styled from 'styled-components';


interface Props {
    bgcolor:string
    current:number
    total:number
}

interface FillerProps {
    bgcolor:string
    completed:number
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

const Filler = styled.div<FillerProps>`
height: 100%;
width: ${props => props.completed}%;
background-color: ${props => props.bgcolor};
border-radius: inherit;
text-align: center;
transition:width 1s ease-in-out;
font-family:sans-serif;
`


const ProgressBar = (props: Props) => {

    const { bgcolor, current, total } = props;

    const completed = Math.round(current / total * 100);

    return (
        <Container>
      <Filler completed={completed} bgcolor={bgcolor}>
       <Label>{`${completed}%`}</Label>
      </Filler>
    </Container>
    )
}

export default ProgressBar
