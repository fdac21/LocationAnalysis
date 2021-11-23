import React from 'react'
import styled from 'styled-components'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import * as LocationService from '../services/LocationService'

const Card = styled.div`
    position: relative;
    background-color: white;
    text-align: center;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
    border-radius: 10px;
    padding-bottom: 15px;
    padding-top: 10px;
    padding-right: 10px;
    margin-top: 5px;
    margin-bottom: 20px;
`

const Title = styled.p`
    text-align: center;
    font-family: 'Sora', sans-serif;
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
`

const TravelGraph = () => {
    return (
        <Card>
            <Title>Miles Traveled Past Week</Title>
            <div style={{ height: '300px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={LocationService.getMilesTraveledPastWeek()}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" style={{ fontSize: 14, fontFamily: 'Sora' }} />
                        <YAxis />
                        <Bar dataKey="value" name="Miles" fill="#165aa1" label={{ fill: '#fff', fontSize: 16, fontFamily: 'Sora' }} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    )
}

export default TravelGraph
