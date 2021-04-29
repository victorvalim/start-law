/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import MainCointainer from './components/MainCointainer';
import allActions from './actions';

function App() {
  const dispatch = useDispatch();
  const { isLoading, dataBase } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(allActions.userActions.fetchAPI());
  }, []);
  return (
    <MainCointainer isLoading={isLoading} />
  );
}

export default App;
