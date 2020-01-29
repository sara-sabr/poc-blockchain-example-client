import React from 'react'
import { Search } from './components/Search';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .formBody {
        padding-bottom: 50px;
        }
`;

export const Find = () => (
        <Styles>
        <Container className="formBody" fluid>
        <h2 className="text-center">Generic Form</h2>
        <p className="lead text-center"> Please enter the information accurately</p>
            <Row>
            <Col md={{ span: 6, offset: 3 }}><Search/></Col>
            </Row>
        </Container>
        </Styles>
    )
