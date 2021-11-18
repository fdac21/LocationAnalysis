import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Card = styled.div`
    text-align: center;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
    padding-bottom: 5px;
`

const Number = styled.p`
    font-family: 'JetBrains Mono', monospace;
    font-size: 35px;
    margin: 0px;
    margin-bottom: 10px;
`

const Desc = styled.p`
    font-family: 'Sora', sans-serif;
    font-size: 20px;
    margin: 0px;
`

const NumberCard = ({ number, desc }) => {
    return (
        <Card>
            <Number>{number}</Number>
            <Desc>{desc}</Desc>
        </Card>
    )
}

NumberCard.propTypes = {
    number: PropTypes.string,
    desc: PropTypes.string
}

export default NumberCard
