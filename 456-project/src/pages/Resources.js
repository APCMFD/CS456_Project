import React from 'react';
import { Link } from "react-router-dom";
import ResourceTitle from '../panels/ResourceTitle.js';
import LinkOne from '../panels/LinkOne.js';
import LinkTwo from '../panels/LinkTwo.js';
import LinkThree from '../panels/LinkThree.js';
import LinkFour from '../panels/LinkFour.js';
import ReturnArrow from '../panels/ReturnArrow.js';
import BackArrow from '../images/BackArrow.png';
import ReturnHome from '../audio/ReturnHome.m4a';
import Sound from '../panels/Sound.js';

function Resources() {
    return (
        <>
            <div className="row">
                <div className="column1">
                    <ResourceTitle />
                </div>
            </div>
            <div className="row">
                <div className="column3">
                    <a href="https://ridekc.org/rider-guide/navigator" target="_blank" rel="noreferrer">
                        <LinkOne />
                    </a>
                </div>
                <div className="column3">
                    <a href="https://ridekc.org/routes" target="_blank" rel="noreferrer">
                        <LinkTwo />
                    </a>
                </div>
                <div className="column3">
                    <a href="https://ridekc.org/fares/transit-app" target="_blank" rel="noreferrer">
                        <LinkThree />
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="column2">
                    <a href="https://www.afb.org/blindness-and-low-vision/using-technology/assistive-technology-products/screen-readers" target="_blank" rel="noreferrer">
                        <LinkFour />
                    </a>
                </div>
                <div className="column2">
                    <Link to="/">
                        <Sound audioClip={ReturnHome} source='./images/BackArrow.png' alternate="Back" />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Resources;