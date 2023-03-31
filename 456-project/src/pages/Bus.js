import React from 'react';
import { Link } from "react-router-dom";
import BusPageTitle from '../images/BusPageTitle.png';
import TutorialPanelImage from '../images/TutorialPanel.png';
import AdditionalInfoImage from '../images/AdditionalInformationPanel.png';
import BusScheduleImage from '../images/BusSchedulesPanel.png';
import HomePageImage from '../images/BackArrow.png';
import SoundOne from '../panels/SoundOne.js';
import SoundTwo from '../panels/SoundTwo.js';
import BusPageTop from '../audio/BusPageTop.m4a';
import BusInfo from '../audio/BusInfo.m4a';
import BusTutorial from '../audio/BusTutorial.m4a';
import ReturnHome from '../audio/ReturnHome.m4a';
import BusSchedlues from '../audio/BusSchedules.m4a';
import Hover1 from '../audio/Hover1.m4a';
import Hover2 from '../audio/Hover2.m4a';


const Bus = () => {
    return (
        <>
            <div className="row">
                <div className="column1">
                    <Link to="/">
                        <SoundOne audioClip={BusPageTop} source={BusPageTitle} alternate="Bus Page" />
                    </Link>
                </div>
            </div>

            <div className='row'>
                    <div className='column2'>
                        <SoundTwo audioClip={Hover1} audioClip2={BusTutorial} source={TutorialPanelImage} alternate="Bus Tutorial" />
                    </div>
                    <div className='column2'>
                        <SoundTwo audioClip={Hover2} audioClip2={BusInfo} source={AdditionalInfoImage} alternate="Additonal Bus Information" />
                    </div>
                    <div className='column2'>
                        <Link to="/busSchedules">
                            <SoundOne audioClip={BusSchedlues} source={BusScheduleImage} alternate="Bus Schedules" />
                        </Link>
                    </div>
                    <div className='column2'>
                        <Link to="/">
                            <SoundOne audioClip={ReturnHome} source={HomePageImage} alternate="Back" />
                        </Link>
                    </div>
            </div>
        </>
    );
}

export default Bus;