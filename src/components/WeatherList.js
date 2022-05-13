import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../style/App.css'
import WeatherCard from './WeatherCard'

const WeatherList = ({list, name}) => {

    return(
        <>
            <Row>
                <Col>
                    <h1>{name}</h1>
                </Col>
            </Row>
            <Row>
                {list.map(({ dt, main, weather }) => (
                    <Col key={dt}>
                        <WeatherCard
                            temp={Math.round((main.temp - 273)*1.8)+ 32}
                            dt={dt * 1000}
                            main={weather[0].main}
                            icon={weather[0].icon}
                        />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default WeatherList;