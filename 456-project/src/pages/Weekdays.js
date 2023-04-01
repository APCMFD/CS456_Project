import React from 'react';
import { Link } from "react-router-dom";
import WeekdaysPageTitle from '../images/WeekdaysPageTitle.png';
import Route9 from '../images/Route9Panel.png';
import Route11 from '../images/Route11Panel.png';
import Route12 from '../images/Route12Panel.png';
import Route18 from '../images/Route18Panel.png';
import Route21 from '../images/Route21Panel.png';
import Route23 from '../images/Route23Panel.png';
import Route24 from '../images/Route24Panel.png';
import Route25 from '../images/Route25Panel.png';
import Route27 from '../images/Route27Panel.png';
import Route28 from '../images/Route28Panel.png';
import MainMax from '../images/MainMaxPanel.png';
import TroostMax from '../images/TroostMaxPanel.png';
import ProspectMax from '../images/ProspectMaxPanel.png';
import BackArrow from '../images/3x4BackArrow.png';
import SoundOne from '../panels/SoundOne.js';
import SoundTwo from '../panels/SoundTwo.js';
import WeekdaysTop from '../audio/WeekdaysTop.m4a';
import Route9W from '../audio/Route9W.m4a';
import Route11W from '../audio/Route11W.m4a';
import Route12W from '../audio/Route12W.m4a';
import Route18W from '../audio/Route18W.m4a';
import Route21W from '../audio/Route21W.m4a';
import Route23W from '../audio/Route23W.m4a';
import Route24W from '../audio/Route24W.m4a';
import Route25W from '../audio/Route25W.m4a';
import Route27W from '../audio/Route27W.m4a';
import Route28W from '../audio/Route28W.m4a';
import MainMAXW from '../audio/MainMAXW.m4a';
import TroostMAXW from '../audio/TroostMAXW.m4a';
import ProspectMAXW from '../audio/ProspectMAXW.m4a';
import ReturnToSched from '../audio/ReturnToSched.m4a';
import Hover3 from '../audio/Hover3.m4a';
import Hover4 from '../audio/Hover4.m4a';
import Hover5 from '../audio/Hover5.m4a';
import Hover6 from '../audio/Hover6.m4a';
import Hover7 from '../audio/Hover7.m4a';
import Hover8 from '../audio/Hover8.m4a';
import Hover9 from '../audio/Hover9.m4a';
import Hover10 from '../audio/Hover10.m4a';
import Hover11 from '../audio/Hover11.m4a';
import Hover12 from '../audio/Hover12.m4a';
import Hover13 from '../audio/Hover13.m4a';
import Hover14 from '../audio/Hover14.m4a';
import Hover15 from '../audio/Hover15.m4a';

const Weekdays = () => {
    return (
        <>
            <div className="row">
                <div className="column1">
                    <Link to="/">
                        <SoundOne audioClip={WeekdaysTop} source={WeekdaysPageTitle} alternate="Weekdays (Monday through Friday) Bus Schedules" />
                    </Link>
                </div>
            </div>

            <div className='row'>
                <div className='column5'>
                    <SoundTwo audioClip={Hover3} audioClip2={Route9W} source={Route9} alternate="Route 9" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Hover4} audioClip2={Route11W} source={Route11} alternate="Route 11" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Hover5} audioClip2={Route12W} source={Route12} alternate="Route 12" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Hover6} audioClip2={Route18W} source={Route18} alternate="Route 18" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Hover7} audioClip2={Route21W} source={Route21} alternate="Route 21" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Hover8} audioClip2={Route23W} source={Route23} alternate="Route 23" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Hover9} audioClip2={Route24W} source={Route24} alternate="Route 24" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Hover10} audioClip2={Route25W} source={Route25} alternate="Route 25" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Hover11} audioClip2={Route27W} source={Route27} alternate="Route 27" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Hover12} audioClip2={Route28W} source={Route28} alternate="Route 28" />
                </div>
            </div>

            <div className='row'>
                <div className='column4'>
                    <SoundTwo audioClip={Hover13} audioClip2={MainMAXW} source={MainMax} alternate="Main MAX" />
                </div>
                <div className='column4'>
                    <SoundTwo audioClip={Hover14} audioClip2={TroostMAXW} source={TroostMax} alternate="Troost MAX" />
                </div>
                <div className='column4'>
                    <SoundTwo audioClip={Hover15} audioClip2={ProspectMAXW} source={ProspectMax} alternate="Prospect MAX" />
                </div>
                <div className='column4'>
                    <Link to="/busSchedules">
                        <SoundOne audioClip={ReturnToSched} source={BackArrow} alternate="Back" />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Weekdays;