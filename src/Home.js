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
        <h2>Introducing the Death Notification System</h2>
        <p class="lead font-weight-light">A simple system that allows users to input information of passed on Canadians.</p>
        <h3>The System</h3>
        <p class="lead font-weight-light">The system is able to provide the following features</p>
        <ul class="features list-group list-group-flush">
            <li class="list-group-item">Notify family members or next of kin</li>
            <li class="list-group-item">Collaboration between government departments</li>
            <li class="list-group-item">Upload death certificate</li>
            <li class="list-group-item">Validate death certificate</li>
        </ul>
        
        <h3>The Form</h3>
        <p class="lead font-weight-light">This form allows authorized individuals (family members, lawyers, etc..) to enter information of the deceased</p>
        <p>If you are an <span class="font-weight-bold">authorize user</span> and have all the <span class="font-weight-bold">required documents</span> to submit the information; please <a href="/form" class="text-decoration-none">input the information inside</a> the form</p>

        </Container>
        </Styles>
    )
