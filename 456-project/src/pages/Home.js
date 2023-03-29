import React from 'react';
import { Link } from "react-router-dom";
import HomePageTitle from '../images/HomePageTitle.png';
import BusPanel from '../images/BusPanel.png';
import TramPanel from '../images/StreetcarPanel.png';
import TrainPanel from '../images/TrainPanel.png';
import ResourcePanel from '../images/ResourcePanel.png';

const Home = () => {
    return (
        <>
            <div class="row">
                <div class="column1">
                    <img style={{ width: "100%"}}src={HomePageTitle} alt="Home Title" />
                </div>
            </div>
            <div class="row">
                <div class="column2">
                    <Link to="/bus">
                        <img style={{ width: "100%"}}src={BusPanel} alt="Buses" />
                    </Link>
                </div>
                <div class="column2">
                    <Link to="/tram">
                        <img style={{ width: "100%"}}src={TramPanel} alt="KC Streetcar" />
                    </Link>
                </div>
            </div>
            <div class="row">
                <div class="column2">
                    <Link to="/train">
                        <img style={{ width: "100%"}}src={TrainPanel} alt="Trains" />
                    </Link>
                </div>
                <div class="column2">
                    <Link to="/resources">
                        <img style={{ width: "100%"}}src={ResourcePanel} alt="Additional Resources" />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;
