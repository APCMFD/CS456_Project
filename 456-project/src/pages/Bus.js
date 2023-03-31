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
                    <img style={{ width: "100%"}} src={BusPageTitle} alt="Home Title" />
                </div>
            </div>

            <div className='row'>
                    <div className='column2'>
                        <Link to="/tutorial">
                            <img style={{ width: "100%"}} src={ TutorialPanelImage } alt='Tutorial panel' />
                        </Link>
                    </div>
                    <div className='column2'>
                        <Link to="/resources">
                            <img style={{ width: "100%"}} src={ AdditionalInfoImage } alt='Additional Information panel'/>
                        </Link>
                    </div>
                    <div className='column2'>
                        <Link to="/bussched">
                            <img style={{ width: "100%"}} src={ BusScheduleImage } alt='Bus Schedule panel'/>
                        </Link>
                    </div>
                    <div className='column2'>
                        <Link to="/">
                            <img style={{ width: "100%"}} src={ HomePageImage } alt='Return to Home panel with back arrow'/>
                        </Link>
                    </div>
            </div>
        </>
    );
}

export default Bus;