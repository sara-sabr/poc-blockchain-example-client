import React from 'react'
import { Input } from './components/Input';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .formBody {
        padding-bottom: 50px;
        }
`;

export const Form = () => (
        <Styles>
        <Container className="formBody" fluid>
        <h2 className="text-center">Generic Form</h2>
        <p className="lead text-center"> Please enter the information accurately</p>
            <Row>
            <Col md={{ span: 6, offset: 3 }}><Input/></Col>
            </Row>
        </Container>
        </Styles>
    )
