import React from 'react'
import styled from 'styled-components'
import Heatmap from './components/Heatmap'
import NumberCard from './components/NumberCard'
import { Grid, Row, Col } from 'react-flexbox-grid'

const Content = styled.div`
    padding: 20px;
`

const App = () => {
    return (
        <Content>
            <Grid fluid>
                <Row>
                    <Col xs>
                        <Heatmap></Heatmap>
                    </Col>
                </Row>
                <Row style={{ marginTop: 15 }}>
                    <Col lg={4} md={6}>
                        <NumberCard number="7" desc="States Visited"></NumberCard>
                    </Col>
                    <Col lg={4} md={6}>
                        <NumberCard number="2,655" desc="Miles Traveled"></NumberCard>
                    </Col>
                    <Col lg={4} md={6}>
                        <NumberCard number="1,200mi" desc="Longest Trip"></NumberCard>
                    </Col>
                </Row>
            </Grid>
        </Content>
    )
}

export default App
