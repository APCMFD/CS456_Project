import React from 'react';
import ReturnHome from '../audio/ReturnHome.m4a';
import ResourcesTop from '../audio/ResourcesTop.m4a';
import AdditionalResourcesTitle from '../images/AdditionalResourcesTitle.png';
import useSound from 'use-sound';

const ResourceTitle = () => {
    const [play, { stop }] = useSound(ResourcesTop);
    const [play2, stop2] = useSound(ReturnHome);
  
    return (
        <img style={{ width: "100%"}}src={AdditionalResourcesTitle} alt="Home Title" onMouseEnter={() => play()} onMouseLeave={() => stop() & stop2.stop()} onClick={() => stop() & stop2.stop() & play2() } />
    );
}

export default ResourceTitle;