import React from 'react'
import { Input } from './components/Input';
import { Container, Row, Col } from 'react-bootstrap';


export const Form = () => (
        <Container fluid>
        <h2 className="text-center">Death Notification Form</h2>
        <p className="lead text-center"> Please enter the information accurately</p>
            <Row>
            <Col md={{ span: 6, offset: 3 }}><Input/></Col>
            </Row>
        </Container>
    )
