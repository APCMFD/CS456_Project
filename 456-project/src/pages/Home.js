import React from 'react';
import { Link } from "react-router-dom";
import HomePageTitle from '../images/HomePageTitle.png';
import BusPanel from '../images/BusPanel.png';
import TramPanel from '../images/StreetcarPanel.png';
import TrainPanel from '../images/TrainPanel.png';
import ResourcePanel from '../images/ResourcePanel.png';
import HomePageTop from '../audio/HomePageTop.m4a'
import ToBus from '../audio/ToBus.m4a'
import ToTrain from '../audio/ToTrain.m4a'
import ToTram from '../audio/ToTram.m4a'
import ToResources from '../audio/ToResources.m4a'
import SoundOne from '../panels/SoundOne.js';
import SoundTwo from '../panels/SoundTwo.js';

const Home = () => {
    return (
        <>
            <div className="row">
                <div className="column1">
                    <SoundTwo audioClip={HomePageTop} audioClip2={HomePageTop} source={HomePageTitle} alternate="Home" />
                </div>
            </div>
            <div className="row">
                <div className="column2">
                    <Link to="/bus">
                        <SoundOne audioClip={ToBus} source={BusPanel} alternate="Buses" />
                    </Link>
                </div>
                <div className="column2">
                    <Link to="/tram">
                        <SoundOne audioClip={ToTram} source={TramPanel} alternate="KC Streetcar" />
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="column2">
                    <Link to="/train">
                        <SoundOne audioClip={ToTrain} source={TrainPanel} alternate="Trains" />
                    </Link>
                </div>
                <div className="column2">
                    <Link to="/resources">
                        <SoundOne audioClip={ToResources} source={ResourcePanel} alternate="Additional Resources" />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;
