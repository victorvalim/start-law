/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable eqeqeq */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import allActions from '../actions';

// import allActions from '../actions';

const Background = styled.div`
width: 100%;
height: 100%;
// background: rgba(0,0,0,0);
position:fixed;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
// background-color:black;

z-index:10;

`;
const ModalWrapper = styled.div`
margin:0;
width:60%;
height:80%;
// box-shadow: rgba(0,0,0, 0.8);
// background:#fff;
// position:relative;
z-index:20000000;
border-radius:40px;
// opacity:0.1;
background-color:rgb(242,242,245);

`;

function Modal({
  showModal, setShowModal, clickHandler, signHandler, setEdit, edit, setEditInfo,
}) {
  const dispatch = useDispatch();

  const {
    editInfo,
  } = useSelector((state) => state.userReducer);
  const [newData, setNewData] = useState({});
  const [info, setInfo] = useState({});
  const [sign, setSign] = useState({ nome: '' });
  const [type, setType] = useState('cadastro');
  const { users } = useSelector((state) => state.userReducer);

  function changeHandler({ target: { value, name } }) {
    setInfo((state) => ({ ...state, [name]: value }));
  }

  function editChangeHandler({ target: { name, value } }) {
    setNewData((state) => ({ ...state, [name]: value }));
  }
  function editing({ target: { name, value } }) {
    dispatch(allActions.userActions.editInfoATM({ [name]: value }));
  }
  function editData(data) {
    setEdit((state) => !state);
    dispatch(allActions.userActions.edit(data));
  }
  return (
    <>
      { showModal ? (
        <Background>
          <ModalWrapper>
            <span onClick={() => setType('cadastro')}>CADASTRO</span>
            <span onClick={() => setType('usuario')}>USUARIO</span>
            {type === 'cadastro' ? (
              <form>
                <input onChange={changeHandler} name="titulo" placeholder="TÍTULO" />
                {/* <input onChange={changeHandler} name="atendente" placeholder="ATENDENTE" /> */}
                <select onChange={changeHandler} name="atendente">
                  <option value="" disabled defaultValue="" hidden>Atendente</option>
                  {users.map((element) => <option value={element.nome}>{element.nome}</option>)}
                </select>
                <input onChange={changeHandler} name="cliente" placeholder="CLIENTE" />
                {/* <select onChange={changeHandler} name="status">
                  <option value="" disabled selected hidden>STATUS</option>
                  <option name="Abertura" value="Abertura">Abertura</option>
                  <option name="Análise Inicial" value="Análise Inicial">Análise Inicial</option>
                  <option name="Relatório Final" value="Relatório Final">Relatório Final</option>
                  <option name="Concluída" value="Concluída">Concluída</option>

                </select> */}
                <input onChange={changeHandler} name="categoria" placeholder="CATEGORIA" />
                {/* <option value="" disabled selected hidden>CATEGORIA</option>
                  <option value="Contratos">Contratos</option>
                  <option value="Esclarecimentos">Esclarecimentos</option>
                  <option value="Investimentos">Investimentos</option>

                </select> */}
                <button onClick={() => clickHandler(info)} type="button" disabled={!(Object.values(info).length === 4 && !Object.values(info).includes(''))}>Send</button>
              </form>
            ) : (
              <>
                <input onChange={(e) => setSign({ [e.target.name]: e.target.value })} name="nome" placeholder="NOME" />
                <button onClick={() => signHandler(sign)} type="button" disabled={sign.nome === ''}>Send</button>
              </>
            )}
          </ModalWrapper>
        </Background>
      ) : null}
      {edit ? (
        <Background>
          <ModalWrapper>
            (
            <form>
              <input onChange={editing} value={editInfo.titulo} name="titulo" placeholder={editInfo.titulo} />
              {/* <input onChange={changeHandler} name="atendente" placeholder="ATENDENTE" /> */}
              <select onChange={editing} name="atendente">
                <option defaultValue={editInfo.atendente}>{editInfo.atendente}</option>
                {users.map((element) => <option value={element.nome}>{element.nome}</option>)}
              </select>
              <input onChange={editing} value={editInfo.cliente} name="cliente" placeholder="CLIENTE" />
              <input onChange={editing} value={editInfo.categoria} name="categoria" />
              <input onChange={editing} value={editInfo.status} name="status" placeholder="STATUS" />

              <button onClick={() => editData(editInfo)} type="button">Send</button>
            </form>
            )
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
}

export default Modal;
