import React from 'react';
import useSound from 'use-sound';

const Sound = ({ audioClip }, source, alternate) => {
    
    const [play, { stop }] = useSound(audioClip);
  
    return (
        <img style={{ width: "100%" }}src={source} alt={alternate} onMouseEnter={() => play()} onMouseLeave={() => stop()} />
    );
}

export default Sound;
