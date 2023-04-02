import React from 'react';
import { Link } from "react-router-dom";
import SaturdayPageTitle from '../images/SaturdayPageTitle.png';
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
import SaturdayTop from '../audio/SaturdayTop.m4a';
import Route9Sa from '../audio/Route9Sa.m4a';
import Route11Sa from '../audio/Route11Sa.m4a';
import Route12Sa from '../audio/Route12Sa.m4a';
import Route18Sa from '../audio/Route18Sa.m4a';
import Route21Sa from '../audio/Route21Sa.m4a';
import Route23Sa from '../audio/Route23Sa.m4a';
import Route24Sa from '../audio/Route24Sa.m4a';
import Route25Sa from '../audio/Route25Sa.m4a';
import Route27Sa from '../audio/Route27Sa.m4a';
import Route28Sa from '../audio/Route28Sa.m4a';
import MainMAXSa from '../audio/MainMAXSa.m4a';
import TroostMAXSa from '../audio/TroostMAXSa.m4a';
import ProspectMAXSa from '../audio/ProspectMAXSa.m4a';
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

const Saturday = () => {
    return (
        <>
            <div className="row">
                <div className="column1">
                    <Link to="/">
                        <SoundOne audioClip={SaturdayTop} source={SaturdayPageTitle} alternate="Saturday Bus Schedules" />
                    </Link>
                </div>
            </div>

            <div className='row'>
                <div className='column5'>
                    <SoundTwo audioClip={Hover3} audioClip2={Route9Sa} source={Route9} alternate="Route 9" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Hover4} audioClip2={Route11Sa} source={Route11} alternate="Route 11" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Hover5} audioClip2={Route12Sa} source={Route12} alternate="Route 12" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Hover6} audioClip2={Route18Sa} source={Route18} alternate="Route 18" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Hover7} audioClip2={Route21Sa} source={Route21} alternate="Route 21" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Hover8} audioClip2={Route23Sa} source={Route23} alternate="Route 23" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Hover9} audioClip2={Route24Sa} source={Route24} alternate="Route 24" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Hover10} audioClip2={Route25Sa} source={Route25} alternate="Route 25" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Hover11} audioClip2={Route27Sa} source={Route27} alternate="Route 27" />
                </div>
                <div className='column5'>
                    <SoundTwo audioClip={Hover12} audioClip2={Route28Sa} source={Route28} alternate="Route 28" />
                </div>
            </div>

            <div className='row'>
                <div className='column4'>
                    <SoundTwo audioClip={Hover13} audioClip2={MainMAXSa} source={MainMax} alternate="Main MAX" />
                </div>
                <div className='column4'>
                    <SoundTwo audioClip={Hover14} audioClip2={TroostMAXSa} source={TroostMax} alternate="Troost MAX" />
                </div>
                <div className='column4'>
                    <SoundTwo audioClip={Hover15} audioClip2={ProspectMAXSa} source={ProspectMax} alternate="Prospect MAX" />
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

export default Saturday;