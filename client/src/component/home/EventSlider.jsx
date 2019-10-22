import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class EventSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            events: []
        };
    }

    componentDidMount() {
        fetch('./data/events.json')
            .then((res) => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        events: data
                    });
                })
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error
                })
            });
        }
    render() {
        const { events } = this.state
        const settings = {
            infinite: true,
            dots: true,
            slidesToShow: 3,
            speed: 500,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
          };
        return(
            <div className="slick-container">
                <h3>Center Mode</h3>
                <Slider {...settings}>
                {events.map((eventInfo, index) => (
                        <div key={index} className="event-slider-container">
                            <img src={eventInfo.image} className="event-img" />
                            <div className="slick-overlay">
                                <h4 className="event-title">{eventInfo.event}</h4>
                                <p className="event-description">{eventInfo.description}</p>
                            </div>
                        </div>
                    ))
                    }
                </Slider>
            </div>
        )
    }
}

export default EventSlider;