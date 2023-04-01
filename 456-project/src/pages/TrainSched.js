import React from 'react';
import { Link } from "react-router-dom";
import TrainSchedulesTitle from '../images/TrainSchedulesTitle.png';
import MondayPanel from '../images/MondayPanel.png';
import TuesdayPanel from '../images/TuesdayPanel.png';
import WednesdayPanel from '../images/WednesdayPanel.png';
import ThursdayPanel from '../images/ThursdayPanel.png';
import FridayPanel from '../images/FridayPanel.png';
import SaturdayPanel from '../images/SaturdayPanel.png';
import SundayPanel from '../images/SundayPanel.png';
import BackArrow from '../images/2x4BackArrow.png';
import SoundOne from '../panels/SoundOne.js';
import SoundTwo from '../panels/SoundTwo.js';
import TrainSchedulesTop from '../audio/TrainSchedulesTop.m4a';
import Tuesday from '../audio/Tuesday.m4a';
import Monday from '../audio/Monday.m4a';
import Wednesday from '../audio/Wednesday.m4a';
import Thursday from '../audio/Thursday.m4a';
import Friday from '../audio/Friday.m4a';
import Saturday from '../audio/Saturday.m4a';
import Sunday from '../audio/Sunday.m4a';
import ReturnToTrain from '../audio/ReturnToTrain.m4a';
import Hover21 from '../audio/Hover21.m4a';
import Hover22 from '../audio/Hover22.m4a';
import Hover23 from '../audio/Hover23.m4a';
import Hover24 from '../audio/Hover24.m4a';
import Hover25 from '../audio/Hover25.m4a';
import Hover26 from '../audio/Hover26.m4a';
import Hover27 from '../audio/Hover27.m4a';

const TrainSched = () => {
    return (
        <>
            <div className="row">
                <div className="column1">
                    <Link to="/">
                        <SoundOne audioClip={TrainSchedulesTop} source={TrainSchedulesTitle} alternate="Train Schedules" />
                    </Link>
                </div>
            </div>

            <div className='row'>
                    <div className='column4'>
                        <SoundTwo audioClip={Hover21} audioClip2={Monday} source={MondayPanel} alternate="Monday" />
                    </div>
                    <div className='column4'>
                        <SoundTwo audioClip={Hover22} audioClip2={Tuesday} source={TuesdayPanel} alternate="Tuesday" />
                    </div>
                    <div className='column4'>
                        <SoundTwo audioClip={Hover23} audioClip2={Wednesday} source={WednesdayPanel} alternate="Wednesday" />
                    </div>
                    <div className='column4'>
                        <SoundTwo audioClip={Hover24} audioClip2={Thursday} source={ThursdayPanel} alternate="Thursday" />
                    </div>
                    <div className='column4'>
                        <SoundTwo audioClip={Hover25} audioClip2={Friday} source={FridayPanel} alternate="Friday" />
                    </div>
                    <div className='column4'>
                        <SoundTwo audioClip={Hover26} audioClip2={Saturday} source={SaturdayPanel} alternate="Saturday" />
                    </div>
                    <div className='column4'>
                        <SoundTwo audioClip={Hover27} audioClip2={Sunday} source={SundayPanel} alternate="Sunday" />
                    </div>
                    <div className='column4'>
                        <Link to="/">
                            <SoundOne audioClip={ReturnToTrain} source={BackArrow} alternate="Back" />
                        </Link>
                    </div>
            </div>
        </>
    );
}

export default TrainSched;