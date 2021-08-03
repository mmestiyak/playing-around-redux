import React from 'react';
import { useSelector } from 'react-redux';
import ChildComponent2 from './ChildComponent2';
const ChildComponent1 = () => {
  const accountState = useSelector((state) => state.account);

  return (
    <div>
      <h1>ACCOUNT BALANCE {accountState}$</h1>
      <hr />
      <ChildComponent2></ChildComponent2>
    </div>
  );
};

export default ChildComponent1;
