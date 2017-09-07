import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import DatePicker from 'react-bootstrap-date-picker';

import './Date.css';

const Date = ({date, onChange}) => (
    <Row>
        <Col sm={4} md={3}>
            <div className="date-picker-wrapper">
                <DatePicker
                    dateFormat="YYYY-MM-DD"
                    value={date}
                    onChange={onChange}
                />
            </div>
        </Col>
        <Col sm={8} md={9}>
            <h3 className="label-current-date">{date.substr(0, 10)}</h3>
        </Col>
    </Row>
);

export default Date;