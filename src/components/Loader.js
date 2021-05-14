import React from 'react';
import { Container } from 'react-bootstrap';
import loader from '../assets/images/loader-ring.svg';

const Loader = () => {
    return (
        <Container className="d-flex justify-content-center">
            <div className="LoadingOverlay center-screen">
                <img className="loader-size" src={loader} alt="loader" />
            </div>
        </Container>
    );
};

export default Loader;