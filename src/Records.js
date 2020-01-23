import React from 'react';
import { ItemList } from './components/ItemList';
import { Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .recordBody {
        padding-bottom: 50px;
        }
`;


export const Records = () => (
    <Styles>
<Container fluid className="recordBody">
        <h2 class="text-center">Death Notification Records</h2>
        <p class="lead text-center"> List of Active Records</p>
            <Row>
            <Col md={{ span: 6, offset: 3 }}><ItemList/></Col>
            </Row>
        </Container>
        </Styles>
    )
