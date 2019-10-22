import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return(
            <Row className="about-main-container">
                <Col className="about-container">
                    <h2>ABOUT</h2>
                    <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce magna nisi, tempor id neque a, 
                        ornare hendrerit ipsum. Aliquam id ornare felis, pharetra tincidunt leo. Interdum et malesuada
                        fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus 
                        et ultrices posuere cubilia Curae; Vivamus consectetur, turpis mattis rhoncus finibus, quam ante 
                        condimentum nulla, vitae egestas est ex ut nibh. Curabitur ultricies nisi risus, nec varius tortor
                        tempor ac. Morbi in diam sed nisi tempor finibus eget eget nisl. Fusce imperdiet ultricies urna, 
                        eu euismod lectus gravida a. Aenean vitae magna orci. Curabitur varius venenatis erat. Phasellus 
                        leo tortor, volutpat nec imperdiet fringilla, iaculis nec nibh. Suspendisse potenti.
                    </p>
                </Col>
                <Col className="pic-container"></Col>
            </Row>
    )
}

export default About;