import React, { useState } from 'react';
import './ActorsPage.css';
import ActorCard from '../../models/ActorCard';
import {Container, Row, Col } from 'react-bootstrap';

function ActorsPage() {
    const [actors, setActors] = useState([
            new ActorCard("Brad",     "pitt",  "1970-03-01", "https://shorturl.at/jATWX", "012345678"),
            new ActorCard("Angelina", "Jolie", "1980-02-08", "https://shorturl.at/mvyCN", "012345679")]);

    let actorsArr = actors.map(actor =>
                                // <div key={actor.id} className="col col-sm-4">
                                <Col key={actor.id}>
                                    <img src={actor.image} alt="actor"></img>
                                    <h5>{actor.firstName} {actor.lastName}</h5>
                                    <h5>{actor.getAge()}</h5>
                                </Col>);  
    return (
        <Container>
            <Row>
                {actorsArr}
            </Row>
        </Container>
    );
}

export default ActorsPage;