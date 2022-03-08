import { createAction, handleActions } from 'redux-actions';

const CONNECT = 'wallet/CONNECT';

export const connect = createAction(CONNECT, address => address);

const initialState = {
    walletAddress: "Connect Wallet",
};

export default handleActions({
    [CONNECT]: (state, {payload : data}) => {
      return { walletAddress: data.address};
    },
    // action 객체를 참조하지 않으니까 이렇게 생략을 할 수도 있겠죠?
    // state 부분에서 비구조화 할당도 해주어서 코드를 더욱 간소화시켰습니다.
  }, initialState);
