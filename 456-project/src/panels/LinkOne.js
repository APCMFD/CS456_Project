import React from 'react';
import Link1 from '../audio/Link1.m4a';
import Link1Panel from '../images/Link1Panel.png';
import useSound from 'use-sound';

const LinkOne = () => {
    const [play, { stop }] = useSound(Link1);
  
    return (
        <img style={{ width: "100%" }}src={Link1Panel} alt="link 1" onMouseEnter={() => play()} onMouseLeave={() => stop()} />
    );
}

export default LinkOne;