import React from 'react';
import { Link } from "react-router-dom";
import SoundOne from '../panels/SoundOne.js';
import ReturnHome from '../audio/ReturnHome.m4a';
import Link1 from '../audio/Link1.m4a';
import Link2 from '../audio/Link2.m4a';
import Link3 from '../audio/Link3.m4a';
import Link4 from '../audio/Link4.m4a';
import ResourcesTop from '../audio/ResourcesTop.m4a';
import AdditionalResourcesTitle from '../images/AdditionalResourcesTitle.png';
import BackArrow from '../images/BackArrow.png';
import Link1Panel from '../images/Link1Panel.png';
import Link2Panel from '../images/Link2Panel.png';
import Link3Panel from '../images/Link3Panel.png';
import Link4Panel from '../images/Link4Panel.png';

function Resources() {
    return (
        <>
            <div className="row">
                <div className="column1">
                    <Link to="/">
                        <SoundOne audioClip={ResourcesTop} source={AdditionalResourcesTitle} alternate="Additional Resources" />
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="column3">
                    <Link to="https://ridekc.org/rider-guide/navigator" target="_blank" rel="noreferrer">
                        <SoundOne audioClip={Link1} source={Link1Panel} alternate="RideKC Navigator" />
                    </Link>
                </div>
                <div className="column3">
                    <Link to="https://ridekc.org/routes" target="_blank" rel="noreferrer">
                        <SoundOne audioClip={Link2} source={Link2Panel} alternate="RideKC Routes" />
                    </Link>
                </div>
                <div className="column3">
                    <Link to="https://ridekc.org/fares/transit-app" target="_blank" rel="noreferrer">
                        <SoundOne audioClip={Link3} source={Link3Panel} alternate="RideKC Transit App" />
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="column2">
                    <Link to="https://www.afb.org/blindness-and-low-vision/using-technology/assistive-technology-products/screen-readers" target="_blank" rel="noreferrer">
                        <SoundOne audioClip={Link4} source={Link4Panel} alternate="Screen Reader Options" />
                    </Link>
                </div>
                <div className="column2">
                    <Link to="/">
                        <SoundOne audioClip={ReturnHome} source={BackArrow} alternate="Back" />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Resources;