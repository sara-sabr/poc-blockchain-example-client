import React from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .features {
        padding-bottom: 1em;
    }
    `;

export const Home = () => (
    <Styles>
    <Container>
        <h2>Introducing the Generic System</h2>
        <p class="lead font-weight-light">A simple system that allows users to input information.</p>
        <h3>The System</h3>
        <p class="lead font-weight-light">The system is able to provide the following features</p>
        <ul class="features list-group list-group-flush">
            <li class="list-group-item">Feature one</li>
            <li class="list-group-item">Feature two</li>
            <li class="list-group-item">Feature three</li>
            <li class="list-group-item">Feature four</li>
        </ul>
        
        <h3>The Form</h3>
        <p class="lead font-weight-light">Use the form to enter information</p>
        <p>If you are an <span class="font-weight-bold">authorize user</span> and have all the <span class="font-weight-bold">required documents</span> to submit the information; please <a href="/form" class="text-decoration-none">input the information inside</a> the form</p>

        </Container>
        </Styles>
    )
