import { createAction, handleActions } from "redux-actions";

const INCREMENT = 'amount/INCREMENT';
const DECREMENT = 'amount/DECREMENT';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

const initialState = {
    number: 0,
    price: 0,
    perTransaction: 0,
    perWallet: 0
}

const counter = handleActions({
    [INCREMENT]: (state, action) => {
        let num = state.number;

        if(num < 3){
            num += 1;
        }

        return{
            ...state,
            number: num
        }
    },
    [DECREMENT]: (state, action) => {
        let num = state.number;

        if(num > 0){
            num -= 1;
        }

        return{
            ...state,
            number: num
        }
    }
}, initialState);

export default counter;