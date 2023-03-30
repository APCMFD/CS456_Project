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

            <div className='Content-Panel'>
                    <div className='Content-Item'>
                        <img className='Panel-Item-Image' src={ TutorialPanelImage } alt='Tutorial panel' />
                    </div>
                    <div className='Content-Item'>
                        <img className='Panel-Item-Image' src={ AdditionalInfoImage } alt='Additional Information panel'/>
                    </div>
                    <div className='Content-Item'>
                        <img className='Panel-Item-Image' src={ BusScheduleImage } alt='Bus Schedule panel'/>
                    </div>
                    <div className='Content-Item'>
                        <img className='Panel-Item-Image' src={ HomePageImage } alt='Return to Home panel with back arrow'/>
                    </div>
            </div>
        </>
    );
}

export default Bus;