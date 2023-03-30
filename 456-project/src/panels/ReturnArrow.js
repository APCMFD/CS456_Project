import React from 'react';
import ReturnHome from '../audio/ReturnHome.m4a';
import BackArrow from '../images/BackArrow.png';
import useSound from 'use-sound';

const ReturnArrow = () => {
    const [play, { stop }] = useSound(ReturnHome);
  
    return (
        <img style={{ width: "100%" }}src={BackArrow} alt="Back" onMouseEnter={() => play()} onMouseLeave={() => stop()} />
    );
}

export default ReturnArrow;