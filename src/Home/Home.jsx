import React from 'react';
import Banner from './Slider'
import Aboutcompany from './Aboutcompany';
import Portfolio from './Portfolio';
import WhyChooseUs from './WhyChooseUs';
const Home = () => {
    return (
        <div className='relative'>
            <Banner />
            <WhyChooseUs />
            <Portfolio />
            <Aboutcompany />
        </div>
    )
}

export default Home;
