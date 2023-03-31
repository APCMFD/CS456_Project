import React from 'react';
import useSound from 'use-sound';

const SoundTwo = ({ audioClip, audioClip2, source, alternate}) => {
    const [play, { stop }] = useSound(audioClip);
    const [play2, stop2] = useSound(audioClip2);
  
    return (
        <img style={{ width: "100%"}}src={source} alt={alternate} onMouseEnter={() => play()} onMouseLeave={() => stop() & stop2.stop()} onClick={() => stop() & stop2.stop() & play2() } />
    );
}

export default SoundTwo;