import React from 'react';

const VideoContainer = () => {
        return (
            <section className="container-fluid vidContainer">
                <div className="overlay"></div>
                <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop" >
                    <source src="../video/video_background.mp4" type="video/mp4" />
                </video>
                <div className="container h-100">
                    <div className="d-flex h-100 text-center align-items-center">
                        <div className="w-100 text-white">
                            <h1 className="display-3 videoText">LIFESPORTS</h1>
                        </div>
                    </div>
                </div>
            </section>
        )
}

export default VideoContainer;