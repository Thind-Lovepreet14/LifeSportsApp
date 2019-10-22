import React from 'react';
import VideoContainer from '../component/home/VideoContainer';
import About from '../component/home/About';
import ParallaxHome from '../component/home/ParallaxHome';
import EventSlider from '../component/home/EventSlider';
import '../component/home/home.css'

const HomePage = () => {
    return(
        <>
            <VideoContainer />
            <About />
            <ParallaxHome />
            <EventSlider />
        </>
    )
}

export default HomePage;