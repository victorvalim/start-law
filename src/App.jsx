/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import MainCointainer from './components/MainCointainer';
import allActions from './actions';
import { GlobalStyle } from './components/globalStyles';

function App() {
  const [filter, setFilter] = useState({
    atendente: '',
    cliente: '',
    id: '',
    status: '',
    titulo: '',
    autor: '',

  });
  const [edit, setEdit] = useState(false);
  const [editInfo, setEditInfo] = useState({});
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  // const [innerSize, setInnerSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  //   const {
  //     dataBase,
  //     isLoading,
  //     solicitation,
  //     status,
  //     innerSize,
  //     users,
  //     filtered,
  //     userAndClient,
  //     editInfo,
  // } = useSelector((state) => state.userReducer);
  const {
    isLoading, dataBase, solicitation, status, response, users, filtered, userAndClient,
  } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(allActions.userActions.fetchAPI(isLoading));
    dispatch(allActions.userActions.innerSize({ width: window.innerWidth, height: window.innerHeight }));
  }, []);
  useEffect(() => {
    dispatch(allActions.userActions.filter(filter));
  }, [filter, dataBase, userAndClient]);

  function openModal() {
    setShowModal((state) => !state);
  }
  function clickHandler(info) {
    dispatch(allActions.userActions.postAPI(info));
    setShowModal((state) => !state);
  }
  function signHandler(info) {
    dispatch(allActions.userActions.postUser(info));
    setShowModal((state) => !state);
  }
  function inputTable({ target: { name, value } }) {
    setFilter((state) => ({ ...state, [name]: value }));
  }
  function editHandler(info) {
    setEdit((state) => !state);
    dispatch(allActions.userActions.editInfoATM(info));
  }
  function deleteHandler(info) {
    dispatch(allActions.userActions.deleteAction(info));
  }

  return (
    <>
      <MainCointainer isLoading={isLoading} solicitation={solicitation} status={status} functionModal={openModal} showModal={showModal} setShowModal={setShowModal} clickHandler={clickHandler} signHandler={signHandler} dataBase={dataBase} inputTable={inputTable} filtered={filtered} userAndClient={userAndClient} edit={edit} setEdit={setEdit} setEditInfo={setEditInfo} editInfo={editInfo} editHandler={editHandler} deleteHandler={deleteHandler} />
      <GlobalStyle showModal={showModal} />
    </>
  );
}

export default App;
