import React from 'react';
import { Link } from "react-router-dom";
import BusPageTitle from '../images/BusPageTitle.png';
import TutorialPanelImage from '../images/TutorialPanel.png';
import AdditionalInfoImage from '../images/AdditionalInformationPanel.png';
import BusScheduleImage from '../images/BusSchedulesPanel.png';
import HomePageImage from '../images/BackArrow.png';

const Bus = () => {
    return (
        <>
            <div className="row">
                <div className="column1">
                    <img src={BusPageTitle} alt="Home Title" />
                </div>
            </div>

            <div className='row'>
                    <div className='column2'>
                        <Link to="/tutorial">
                            <img className='Panel-Item-Image' src={ TutorialPanelImage } alt='Tutorial panel' />
                        </Link>
                    </div>
                    <div className='column2'>
                        <Link to="/resources">
                            <img className='Panel-Item-Image' src={ AdditionalInfoImage } alt='Additional Information panel'/>
                        </Link>
                    </div>
                    <div className='column2'>
                        <Link to="/bussched">
                            <img className='Panel-Item-Image' src={ BusScheduleImage } alt='Bus Schedule panel'/>
                        </Link>
                    </div>
                    <div className='column2'>
                        <Link to="/">
                            <img className='Panel-Item-Image' src={ HomePageImage } alt='Return to Home panel with back arrow'/>
                        </Link>
                    </div>
            </div>
        </>
    );
}

export default Bus;