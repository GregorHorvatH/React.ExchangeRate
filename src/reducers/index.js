import { combineReducers } from 'redux'
import rates from './rates'
import filters from './filters'

export default combineReducers({
    rates,
    filters
})