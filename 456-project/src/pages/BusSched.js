import React from 'react';
import { Link } from "react-router-dom";
import SoundOne from '../panels/SoundOne.js';
import BusSchedulesTitle from '../images/BusSchedulesTitle.png';
import BackArrow from '../images/BackArrow.png';
import SaturdaySchedulesPanel from '../images/SaturdaySchedulesPanel.png';
import SundaySchedulesPanel from '../images/SundaySchedulesPanel.png';
import WeekdaysSchedulesPanel from '../images/WeekdaysSchedulesPanel.png';
import BusSchedulesTop from '../audio/BusSchedulesTop.m4a';
import ReturnToBus from '../audio/ReturnToBus.m4a';
import SaturdaySchedule from '../audio/SaturdaySchedule.m4a';
import SundaySchedule from '../audio/SundaySchedule.m4a';
import WeekdaysSchedule from '../audio/WeekdaysSchedule.m4a';

const BusSched = () => {
    return (
        <>
            <div className="row">
                <div className="column1">
                    <Link to="/">
                        <SoundOne audioClip={BusSchedulesTop} source={BusSchedulesTitle} alternate="Bus Schedules" />
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="column2">
                    <Link to="/weekdaysBusSchedules">
                        <SoundOne audioClip={WeekdaysSchedule} source={WeekdaysSchedulesPanel} alternate="Weekdays (Monday through Friday) Schedules" />
                    </Link>
                </div>
                <div className="column2">
                    <Link to="/saturdayBusSchedules">
                        <SoundOne audioClip={SaturdaySchedule} source={SaturdaySchedulesPanel} alternate="Saturday Schedules" />
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="column2">
                    <Link to="/sundayBusSchedules">
                        <SoundOne audioClip={SundaySchedule} source={SundaySchedulesPanel} alternate="Sunday Schedules" />
                    </Link>
                </div>
                <div className="column2">
                    <Link to="/bus">
                        <SoundOne audioClip={ReturnToBus} source={BackArrow} alternate="Back" />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default BusSched;