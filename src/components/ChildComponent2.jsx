import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux/action-creators';
const ChildComponent2 = () => {
  const dispatch = useDispatch();
  const { withdraw, deposit } = bindActionCreators(actionCreators, dispatch);
  const accountState = useSelector((state) => state.account);
  return (
    <div>
      <div>
        <button
          disabled={accountState <= 100}
          onClick={() => {
            withdraw(100);
          }}
        >
          Withdraw 100$
        </button>{' '}
        <button
          onClick={() => {
            deposit(100);
          }}
        >
          Deposit 100$
        </button>
      </div>
    </div>
  );
};

export default ChildComponent2;
