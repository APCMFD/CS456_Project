import React from 'react';
import Link3 from '../audio/Link3.m4a';
import Link3Panel from '../images/Link3Panel.png';
import useSound from 'use-sound';

const LinkThree = () => {
    const [play, { stop }] = useSound(Link3);
  
    return (
        <img style={{ width: "100%" }}src={Link3Panel} alt="link 3" onMouseEnter={() => play()} onMouseLeave={() => stop()} />
    );
}

export default LinkThree;