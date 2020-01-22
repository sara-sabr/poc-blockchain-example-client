import React from 'react';
import { ItemList } from './components/ItemList';
import { Container, Row, Col} from 'react-bootstrap';


export const Records = () => (
<Container fluid>
        <h2 class="text-center">Death Notification Records</h2>
        <p class="lead text-center"> List of Active Records</p>
            <Row>
            <Col md={{ span: 6, offset: 3 }}><ItemList/></Col>
            </Row>
        </Container>
    )
