import React from 'react';
import { Link } from "react-router-dom";
import TramPageTitle from '../images/TramPageTitle.png';
import TutorialPanelImage from '../images/TutorialPanel.png';
import AdditionalInfoImage from '../images/AdditionalInformationPanel.png';
import TramScheduleImage from '../images/StreetcarSchedulePanel.png';
import HomePageImage from '../images/BackArrow.png';
import SoundOne from '../panels/SoundOne.js';
import SoundTwo from '../panels/SoundTwo.js';
import TramPageTop from '../audio/TramPageTop.m4a';
import TramInfo from '../audio/TramInfo.m4a';
import TramTutorial from '../audio/TramTutorial.m4a';
import ReturnHome from '../audio/ReturnHome.m4a';
import TramSchedules from '../audio/TramSchedule.m4a';
import Hover16 from '../audio/Hover16.m4a';
import Hover17 from '../audio/Hover17.m4a';
import Hover18 from '../audio/Hover18.m4a';

const Tram = () => {
    return (
        <>
            <div className="row">
                <div className="column1">
                    <Link to="/">
                        <SoundOne audioClip={TramPageTop} source={TramPageTitle} alternate="Tram Page" />
                    </Link>
                </div>
            </div>

            <div className='row'>
                    <div className='column2'>
                        <SoundTwo audioClip={Hover16} audioClip2={TramTutorial} source={TutorialPanelImage} alternate="Tram Tutorial" />
                    </div>
                    <div className='column2'>
                        <SoundTwo audioClip={Hover17} audioClip2={TramInfo} source={AdditionalInfoImage} alternate="Additonal Tram Information" />
                    </div>
                    <div className='column2'>
                        <SoundTwo audioClip={Hover18} audioClip2={TramSchedules} source={TramScheduleImage} alternate="Tram Schedules" />
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

export default Tram;