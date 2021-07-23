import React from 'react';
import './ActorsPage.css';
import ActorCard from '../../models/ActorCard/ActorCard';

let actors = [new ActorCard("Brad",     "pitt",     "1970-03-01", "https://shorturl.at/jATWX", "012345678"),
              new ActorCard("Angelina", "Jolie",    "1980-02-08", "https://shorturl.at/mvyCN", "012345679")];

function ActorsPage() {
    let actorsArr = actors.map(actor =>
                                // <div key={actor.id} className="col col-sm-4">
                                <div key={actor.id} className="col">
                                    <img src={actor.image} alt="actor"></img>
                                    <p>{actor.firstName} {actor.lastName}</p>
                                    <p>{actor.getAge()}</p>
                                </div>);  
    return (
        <div className="container">
            <div className="row">
                {actorsArr}
            </div>
        </div>
    );
}

export default ActorsPage;