import { combineReducers } from 'redux';
import wallet from './Wallet';
import amount from './Amount';

const rootReducer = combineReducers({
    wallet,
    amount,
});


export default rootReducer;