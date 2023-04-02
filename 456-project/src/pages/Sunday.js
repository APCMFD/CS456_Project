import React from 'react';
import { Link } from "react-router-dom";
import SundayPageTitle from '../images/SundayPageTitle.png';
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
import SundayTop from '../audio/SundayTop.m4a';
import Route9Su from '../audio/Route9Su.m4a';
import Route11Su from '../audio/Route11Su.m4a';
import Route12Su from '../audio/Route12Su.m4a';
import Route18Su from '../audio/Route18Su.m4a';
import Route21Su from '../audio/Route21Su.m4a';
import Route23Su from '../audio/Route23Su.m4a';
import Route24Su from '../audio/Route24Su.m4a';
import Route25Su from '../audio/Route25Su.m4a';
import Route27Su from '../audio/Route27Su.m4a';
import Route28Su from '../audio/Route28Su.m4a';
import MainMAXSu from '../audio/MainMAXSu.m4a';
import TroostMAXSu from '../audio/TroostMAXSu.m4a';
import ProspectMAXSu from '../audio/ProspectMAXSu.m4a';
import ReturnToSched from '../audio/ReturnToSched.m4a';
import Hover3 from '../audio/Hover3.m4a';
import Hover4 from '../audio/Hover4.m4a';
import Hover5 from '../audio/Hover5.m4a';
import Hover6 from '../audio/Hover6.m4a';
import Hover8 from '../audio/Hover8.m4a';
import Hover9 from '../audio/Hover9.m4a';
import Hover10 from '../audio/Hover10.m4a';
import Hover11 from '../audio/Hover11.m4a';
import Hover13 from '../audio/Hover13.m4a';
import Hover14 from '../audio/Hover14.m4a';
import Hover15 from '../audio/Hover15.m4a';

const Sunday = () => {
    return (
        <>
            <div className="row">
                <div className="column1">
                    <Link to="/">
                        <SoundOne audioClip={SundayTop} source={SundayPageTitle} alternate="Sunday Bus Schedules" />
                    </Link>
                </div>
            </div>

            <div className='row'>
                <div className='column5'>
                    <SoundTwo audioClip={Hover3} audioClip2={Route9Su} source={Route9} alternate="Route 9" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Hover4} audioClip2={Route11Su} source={Route11} alternate="Route 11" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Hover5} audioClip2={Route12Su} source={Route12} alternate="Route 12" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Hover6} audioClip2={Route18Su} source={Route18} alternate="Route 18" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Route21Su} audioClip2={Route21Su} source={Route21} alternate="Route 21" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Hover8} audioClip2={Route23Su} source={Route23} alternate="Route 23" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Hover9} audioClip2={Route24Su} source={Route24} alternate="Route 24" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Hover10} audioClip2={Route25Su} source={Route25} alternate="Route 25" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Hover11} audioClip2={Route27Su} source={Route27} alternate="Route 27" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Route28Su} audioClip2={Route28Su} source={Route28} alternate="Route 28" />
                </div>
            </div>

            <div className='row'>
                <div className='column4'>
                    <SoundTwo audioClip={Hover13} audioClip2={MainMAXSu} source={MainMax} alternate="Main MAX" />
                </div>
                <div className='column4'>
                    <SoundTwo audioClip={Hover14} audioClip2={TroostMAXSu} source={TroostMax} alternate="Troost MAX" />
                </div>
                <div className='column4'>
                    <SoundTwo audioClip={Hover15} audioClip2={ProspectMAXSu} source={ProspectMax} alternate="Prospect MAX" />
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

export default Sunday;
