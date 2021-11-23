import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    position: relative;
    background-color: white;
    text-align: center;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
    border-radius: 10px;
    padding-bottom: 15px;
    padding-top: 10px;
    margin-top: 5px;
    margin-bottom: 20px;
`

const Title = styled.p`
    font-family: 'Sora', sans-serif;
    font-size: 40px;
    margin: 0px;
`

const Subtitle = styled.p`
    font-family: 'JetBrains Mono', monospace;
    font-size: 15px;
    margin: 0px;
`

const Github = styled.p`
    position: absolute;
    right: 25px;
    top: 10px;
`

const Icon = styled.i`
    font-size: 45px;
    color: #6484dd;
`

const TitleCard = () => {
    return (
        <Card>
            <Title>Location Analysis</Title>
            <Subtitle>Created by Joey Lemon</Subtitle>
            <a href="https://github.com/fdac21/LocationAnalysis">
                <Github><Icon className='fa fa-github'></Icon></Github>
            </a>
        </Card>
    )
}

export default TitleCard
