import React from 'react'
import { Col, Row } from 'react-bootstrap'
import WeatherCard from './WeatherCard'

const WeatherList = ({list}) => {
    return(
        <Row>
            {list.map(({dt, main, weather}) => (
                <Col key={dt}>
                    <WeatherCard 
                        max={main.temp_max}
                        min={main.temp_min}
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