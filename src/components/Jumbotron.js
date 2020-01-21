import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import flag from '../assets/flag.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${flag}) no-repeat center center;
        background-size: cover;
        color: #ccc;
        height: 400px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.2;
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
                <h1>Death Notification System</h1>
                <p>A blockchain based system built by ESDC</p>
            </Container>
        </Jumbo>
    </Styles>
)