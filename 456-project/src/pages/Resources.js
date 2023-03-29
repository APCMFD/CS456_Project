import React from 'react';
import { Link } from "react-router-dom";
import HomePageTitle from '../images/HomePageTitle.png';
import AdditionalResourcesTitle from '../images/AdditionalResourcesTitle.png';
import Link1Panel from '../images/Link1Panel.png';
import Link2Panel from '../images/Link2Panel.png';
import Link3Panel from '../images/Link3Panel.png';
import Link4Panel from '../images/Link4Panel.png';
import BackArrow from '../images/BackArrow.png';

const Resources = () => {
    return (
        <>
            <div class="row">
                <div class="column1">
                    <img style={{ width: "100%"}}src={AdditionalResourcesTitle} alt="Home Title" />
                </div>
            </div>
            <div class="row">
                <div class="column3">
                    <a href="https://ridekc.org/rider-guide/navigator" target="_blank" rel="noreferrer">
                        <img style={{ width: "100%"}}src={Link1Panel} alt="Buses" />
                    </a>
                </div>
                <div class="column3">
                    <a href="https://ridekc.org/routes" target="_blank" rel="noreferrer">
                        <img style={{ width: "100%"}}src={Link2Panel} alt="KC Streetcar" />
                    </a>
                </div>
                <div class="column3">
                    <a href="https://ridekc.org/fares/transit-app" target="_blank" rel="noreferrer">
                        <img style={{ width: "100%"}}src={Link3Panel} alt="KC Streetcar" />
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="column2">
                    <a href="https://www.afb.org/blindness-and-low-vision/using-technology/assistive-technology-products/screen-readers" target="_blank" rel="noreferrer">
                        <img style={{ width: "100%"}}src={Link4Panel} alt="Trains" />
                    </a>
                </div>
                <div class="column2">
                    <Link to="/">
                        <img style={{ width: "100%"}}src={BackArrow} alt="Back" />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Resources;