import React from 'react';
import { Link } from "react-router-dom";
import HomePageTitle from '../images/HomePageTitle.png';

const Train = () => {
    return (
        <>
            <div className="row">
                <div className="column1">
                    <img src={HomePageTitle} alt="Home Title" />
                </div>
            </div>
        </>
    );
}

export default Train;