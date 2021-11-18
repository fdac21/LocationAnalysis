import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'

const Card = styled.div`
    background-color: white;
    text-align: center;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
    border-radius: 10px;
    padding-bottom: 15px;
    padding-top: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
`

const Number = styled.p`
    font-family: 'JetBrains Mono', monospace;
    font-size: 35px;
    margin: 0px;
    margin-bottom: 5px;
`

const Desc = styled.p`
    font-family: 'Sora', sans-serif;
    font-size: 20px;
    margin: 0px;
`

const Icon = styled.i`
    font-size: 45px;
    margin-top: 17px;
`

const NumberCard = ({ number, desc, icon }) => {
    return (
        <Card>
            <Grid>
                <Row>
                    <Col xs={3}>
                        <Row center="xs">
                            <Icon className={`fa fa-${icon}`}></Icon>
                        </Row>
                    </Col>
                    <Col xs={9}>
                        <Row>
                            <Number>{number}</Number>
                        </Row>
                        <Row>
                            <Desc>{desc}</Desc>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </Card>
    )
}

NumberCard.propTypes = {
    number: PropTypes.string,
    desc: PropTypes.string,
    icon: PropTypes.string
}

export default NumberCard
