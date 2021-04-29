/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import MainCointainer from './components/MainCointainer';
import allActions from './actions';

function App() {
  const dispatch = useDispatch();
  // const [innerSize, setInnerSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  const {
    isLoading, dataBase, solicitation, status,
  } = useSelector((state) => state.userReducer);
  console.log(window.innerHeight);
  console.log(window.innerWidth);

  useEffect(() => {
    dispatch(allActions.userActions.fetchAPI());
    dispatch(allActions.userActions.innerSize({ width: window.innerWidth, height: window.innerHeight }));
  }, []);
  return (
    <MainCointainer isLoading={isLoading} solicitation={solicitation} status={status} />
  );
}

export default App;
