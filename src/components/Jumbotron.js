import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled, { css } from 'styled-components';
import rideauCanal from '../assets/rideau_canal.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${rideauCanal}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 200px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Death Notification App</h1>
                <p>A sample app created by R&P</p>
            </Container>
        </Jumbo>
    </Styles>
)