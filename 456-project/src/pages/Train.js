import React from 'react';
import { Link } from "react-router-dom";
import TrainPageTitle from '../images/TrainPageTitle.png';
import TutorialPanelImage from '../images/TutorialPanel.png';
import AdditionalInfoImage from '../images/AdditionalInformationPanel.png';
import TrainScheduleImage from '../images/TrainSchedulesPanel.png';
import HomePageImage from '../images/BackArrow.png';
import SoundOne from '../panels/SoundOne.js';
import SoundTwo from '../panels/SoundTwo.js';
import TrainPageTop from '../audio/TrainPageTop.m4a';
import TrainInfo from '../audio/TrainInfo.m4a';
import TrainTutorial from '../audio/TrainTutorial.m4a';
import ReturnHome from '../audio/ReturnHome.m4a';
import TrainSchedules from '../audio/TrainSchedules.m4a';
import Hover19 from '../audio/Hover19.m4a';
import Hover20 from '../audio/Hover20.m4a';

const Train = () => {
    return (
        <>
            <div className="row">
                <div className="column1">
                    <Link to="/">
                        <SoundOne audioClip={TrainPageTop} source={TrainPageTitle} alternate="Train Page" />
                    </Link>
                </div>
            </div>

            <div className='row'>
                    <div className='column2'>
                        <SoundTwo audioClip={Hover19} audioClip2={TrainTutorial} source={TutorialPanelImage} alternate="Train Tutorial" />
                    </div>
                    <div className='column2'>
                        <SoundTwo audioClip={Hover20} audioClip2={TrainInfo} source={AdditionalInfoImage} alternate="Additonal Train Information" />
                    </div>
                    <div className='column2'>
                        <Link to="/trainSchedules">
                            <SoundOne audioClip={TrainSchedules} source={TrainScheduleImage} alternate="Train Schedules" />
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

export default Train;