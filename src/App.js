import React from 'react'
import styled from 'styled-components'
import Heatmap from './components/Heatmap'
import NumberCard from './components/NumberCard'
import TitleCard from './components/TitleCard'
import TravelGraph from './components/TravelGraph'
import { Grid, Row, Col } from 'react-flexbox-grid'
import * as LocationService from './services/LocationService'

const Wrapper = styled.div`
    text-align: center;
`

const Content = styled.div`
    display: inline-block;
    width: 90%;
    padding: 40px;
`

const App = () => {
    return (
        <Wrapper>
            <Content>
                <Grid fluid>
                    <Row>
                        <Col xs>
                            <TitleCard></TitleCard>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs>
                            <Heatmap></Heatmap>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: 15 }}>
                        <Col xs>
                            <TravelGraph></TravelGraph>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: 15 }}>
                        <Col md={6}>
                            <NumberCard number={LocationService.getStatesVisited().toString()} desc="States Visited" icon="map"></NumberCard>
                        </Col>
                        <Col md={6}>
                            <NumberCard number={LocationService.getTotalMilesTraveled()} desc="Miles Traveled" icon="car"></NumberCard>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: 15 }}>
                        <Col md={6}>
                            <NumberCard number={LocationService.getLongestTrip()} desc="Longest Trip" icon="car"></NumberCard>
                        </Col>
                        <Col md={6}>
                            <NumberCard number={LocationService.getAverageTrip()} desc="Average Trip" icon="car"></NumberCard>
                        </Col>
                    </Row>
                </Grid>
            </Content>
        </Wrapper>
    )
}

export default App
