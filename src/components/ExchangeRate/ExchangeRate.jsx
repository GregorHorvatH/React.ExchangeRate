import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {hashHistory} from "react-router";

import Header from '../Header';
import DateComp from '../Date';
import Currencies from '../Currencies';

import * as pageActions from '../../actions/PageActions'
import loadRates from '../../js/loadRates';
import './ExchangeRate.css';

const dateRegexp = new RegExp(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);

class ExchangeRate extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        const {filters, params, pageActions} = this.props;
        const {setDate, setRate} = pageActions;
        const {date} = params;

        if (date && dateRegexp.test(date)) {
            setDate(date);
            loadRates(setRate, date);
        } else {
            loadRates(setRate, filters.date);
            hashHistory.push(`/rate/${new Date().toISOString().substr(0, 10)}`);
        }
    }

    componentWillReceiveProps(nextProps) {
        const {setDate, setRate} = this.props.pageActions;
        const oldDate = this.props.params.date;
        const newDate = nextProps.params.date;

        if (newDate && oldDate !== newDate && dateRegexp.test(newDate)) {
            setDate(newDate);
            loadRates(setRate, newDate);
        }
    }

    render() {
        const {rates, filters} = this.props;
        const {setDate, setVisibleCCY, setRate} = this.props.pageActions;

        return (
            <div className="container app">
                <Header/>
                <DateComp
                    onChange={(value) => {
                        const actionDate = new Date(Date.parse(value));
                        const currentDate = new Date();
                        const date = actionDate.getTime() > currentDate.getTime() ?
                            currentDate.toISOString() : actionDate.toISOString();

                        hashHistory.push(`/rate/${date.substr(0, 10)}`);
                        setDate(date);
                        loadRates(setRate, date);
                    }}
                    date={filters.date}/>
                <Currencies
                    onChange={setVisibleCCY}
                    filters={filters}
                    rates={rates}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        rates: state.rates,
        filters: state.filters
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeRate);