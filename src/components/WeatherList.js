import React from 'react'
import { Col, Row } from 'react-bootstrap'
import WeatherCard from './WeatherCard'

const WeatherList = ({weathers}) => {
    return(
        <Row>
            {weathers.map(({dt, temp, weather}) => (
                <Col key={dt}>
                    <WeatherCard 
                        max={temp.max}
                        min={temp.min}
                        dt = {dt * 1000}
                        main = {weather[0].main}
                        icon = {weather[0].icon}
                    />
                </Col>
            ))}
        </Row>
    )
}

export default WeatherList;