import React from 'react';

import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/lib/ToggleButton';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import './Currencies.css';

const Currencies = ({ onChange, filters, rates }) => {
    const { visibleCCY } = filters;
    const visibleRates = rates.filter(rate =>
        visibleCCY.find(ccy =>
            ccy === rate.ccy
        ));

    return (
        <Row>
            <Col sm={4} md={3} className="ccy-filter-toolbar">
                <ButtonToolbar>
                    <ToggleButtonGroup
                        className="ccy-filter"
                        type="checkbox"
                        defaultValue={visibleCCY}
                        onChange={onChange}
                    >
                        {
                            rates.map(rate => (
                                <ToggleButton
                                    className="ccy-filter-check"
                                    key={rate.ccy}
                                    value={rate.ccy}
                                >
                                    {rate.ccy}
                                </ToggleButton>
                            ))
                        }
                    </ToggleButtonGroup>
                </ButtonToolbar>
            </Col>
            <Col sm={8} md={9} className="exchange-rate-table">
                <BootstrapTable data={visibleRates} striped hover>
                    <TableHeaderColumn dataField='ccy' width='25%' isKey>CCY</TableHeaderColumn>
                    <TableHeaderColumn dataField='base_ccy' width='25%'>Base CCY</TableHeaderColumn>
                    <TableHeaderColumn dataField='buy' width='25%'>Buy</TableHeaderColumn>
                    <TableHeaderColumn dataField='sale' width='25%'>Sale</TableHeaderColumn>
                </BootstrapTable>
            </Col>
        </Row>
    );
};

export default Currencies;