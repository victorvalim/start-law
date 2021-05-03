/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable eqeqeq */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineExport, AiOutlineUserAdd, AiOutlineFileAdd } from 'react-icons/ai';
import { IoExitOutline } from 'react-icons/io5';
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
margin:0;
z-index:10;

`;
const ModalWrapper = styled.div`
// display:flex;
// flex-wrap:wrap;
// align-items:center;
// justify-content:space-around;

form{
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
align-items:flex-end;
}
margin:0;
width:70%;
height:20%;
// box-shadow: rgba(0,0,0, 0.8);
// background:#fff;
// position:relative;
z-index:20000000;
border-radius:40px;
// opacity:0.1;
// background-color:rgb(242,242,245);
// background-color:rgb(231,232,238);
// background-color:#9a8c98;

button {
  border: 1px solid grey;
  border-radius:5px;

}
input {
  margin
  box-sizing: border-box;
  border: 1px inset grey;
  border-radius:5px;
  padding:2px;
}
select {
  padding:2px;

  box-sizing: border-box;
  border: 1px inset grey;
  border-radius:5px;
}
`;
const ButtonWrapper = styled.div`
display:flex;
justify-content:center;
align-items:baseline;
width:100%;
margin:auto;
cursor:pointer;
button {
margin:5px;
  border: 1px solid grey;
  border-radius:5px;

}
svg{
  magin:0;
}
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
            <ButtonWrapper>
              <AiOutlineFileAdd onClick={() => setType('cadastro')} size={25} />
              <AiOutlineUserAdd onClick={() => setType('usuario')} size={25} />
              {/* <button type="button" onClick={() => setType('cadastro')}>CADASTRO</button>
              <button type="button" onClick={() => setType('usuario')}>USUARIO</button> */}
              <IoExitOutline onClick={() => setShowModal((state) => !state)} size={25} />
            </ButtonWrapper>
            {type === 'cadastro' ? (
              <form>
                <input onChange={changeHandler} name="titulo" placeholder="TÍTULO" />
                {/* <input onChange={changeHandler} name="atendente" placeholder="ATENDENTE" /> */}

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
                <select onChange={changeHandler} name="atendente">
                  <option value="" disabled defaultValue="" hidden>Atendente</option>
                  {users.map((element) => <option value={element.nome}>{element.nome}</option>)}
                </select>
                <button
                  onClick={() => {
                    setInfo({});
                    clickHandler(info);
                  }}
                  type="button"
                  disabled={!(Object.values(info).length === 4 && !Object.values(info).includes('') && info.atendente !== info.cliente)}
                >
                  Enviar
                </button>
              </form>
            ) : (
              <>
                <ButtonWrapper>
                  <input onChange={(e) => setSign({ [e.target.name]: e.target.value })} name="nome" placeholder="NOME" />
                  <button
                    onClick={() => {
                      setSign({ nome: '' });
                      signHandler(sign);
                    }}
                    type="button"
                    disabled={users.map((e) => e.nome).includes(sign.nome) || sign.nome === ''}
                  >
                    Enviar
                  </button>
                </ButtonWrapper>
              </>
            )}
          </ModalWrapper>
        </Background>
      ) : null}
      {edit ? (
        <Background>
          <ModalWrapper>

            <form>
              <input onChange={editing} value={editInfo.titulo} name="titulo" placeholder={editInfo.titulo} />
              {/* <input onChange={changeHandler} name="atendente" placeholder="ATENDENTE" /> */}
              <select onChange={editing} name="atendente">
                <option value="" disabled selected hidden>Atendente</option>

                {/* <option defaultValue={editInfo.atendente}>{editInfo.atendente}</option> */}
                {users.map((element) => <option value={element.nome}>{element.nome}</option>)}
              </select>
              <input onChange={editing} value={editInfo.cliente} name="cliente" placeholder="CLIENTE" />
              {/* <input onChange={editing} value={editInfo.status} name="status" placeholder="STATUS" /> */}
              <select onChange={editing} name="status">
                <option value="" disabled selected hidden>Status</option>
                <option name="Abertura" value="Abertura">Abertura</option>
                <option name="Análise Inicial" value="Análise Inicial">Análise Inicial</option>
                <option name="Relatório Inicial" value="Relatório Inicial">Relatório Inicial</option>
                <option name="Relatório Final" value="Relatório Final">Relatório Final</option>
                <option name="Concluída" value="Concluída">Concluída</option>

              </select>

              <input onChange={editing} value={editInfo.categoria} name="categoria" />
              <button onClick={() => editData(editInfo)} type="button">Enviar</button>
            </form>

          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
}

export default Modal;
