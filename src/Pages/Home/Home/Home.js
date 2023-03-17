import React from 'react';
import Ratings from '../../Ratings/Ratings';
import Services from '../../Services/Services';
import Servicetypes from '../../Servicetypes/Servicetypes';
import Topbanner from '../../Topbanner/Topbanner';

const Home = () => {
    return (
        <div className=''>
            <Topbanner></Topbanner>
            <Servicetypes></Servicetypes>
            <Services></Services>
            <Ratings></Ratings>
        </div>
    );
};

export default Home;