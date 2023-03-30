import React from 'react';
import Link2 from '../audio/Link2.m4a';
import Link2Panel from '../images/Link2Panel.png';
import useSound from 'use-sound';

const LinkTwo = () => {
    const [play, { stop }] = useSound(Link2);
  
    return (
        <img style={{ width: "100%" }}src={Link2Panel} alt="link 2" onMouseEnter={() => play()} onMouseLeave={() => stop()} />
    );
}

export default LinkTwo;