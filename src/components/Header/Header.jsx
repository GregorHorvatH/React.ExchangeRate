import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const Header = () => (
    <Row>
        <Col md={12}>
            <h1 className="text-center">Exchange rate</h1>
        </Col>
    </Row>
);

export default Header;