import React from 'react';
import Link4 from '../audio/Link4.m4a';
import Link4Panel from '../images/Link4Panel.png';
import useSound from 'use-sound';

const LinkFour = () => {
    const [play, { stop }] = useSound(Link4);
  
    return (
        <img style={{ width: "100%" }}src={Link4Panel} alt="link 4" onMouseEnter={() => play()} onMouseLeave={() => stop()} />
    );
}

export default LinkFour;