/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import MainCointainer from './components/MainCointainer';
import allActions from './actions';
import { GlobalStyle } from './components/globalStyles';

function App() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  // const [innerSize, setInnerSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  const {
    isLoading, dataBase, solicitation, status, response, users,
  } = useSelector((state) => state.userReducer);
  console.log(window.innerHeight);
  console.log(window.innerWidth);

  useEffect(() => {
    dispatch(allActions.userActions.fetchAPI(isLoading));
    dispatch(allActions.userActions.innerSize({ width: window.innerWidth, height: window.innerHeight }));
  }, []);
  // useEffect(() => {
  //   dispatch(allActions.userActions.fetchAPI(isLoading));
  // }, []);
  // useEffect(() => {
  //   dispatch(allActions.userActions.fetchAPIUpdate());
  //   dispatch(allActions.userActions.innerSize({ width: window.innerWidth, height: window.innerHeight }));
  // });
  function openModal() {
    setShowModal((state) => !state);
    console.log(showModal);
  }
  function clickHandler(info) {
    dispatch(allActions.userActions.postAPI(info));
    setShowModal((state) => !state);
  }
  function signHandler(info) {
    dispatch(allActions.userActions.postUser(info));
    setShowModal((state) => !state);
  }
  return (
    <>
      <MainCointainer isLoading={isLoading} solicitation={solicitation} status={status} functionModal={openModal} showModal={showModal} setShowModal={setShowModal} clickHandler={clickHandler} signHandler={signHandler} dataBase={dataBase} />
      <GlobalStyle showModal={showModal} />
    </>
  );
}

export default App;
