/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  AiOutlineSearch, AiOutlineEdit, AiOutlineDelete, AiOutlineUserDelete,
} from 'react-icons/ai';

function Table({
  dataBase, isLoading, inputTable, userAndClient, editHandler, deleteHandler,
}) {
  return (
    <>
      <table>
        <thead>
          <tr align="left">

            <th align="left">
              <AiOutlineSearch />
              <input id="funkystyling" onChange={inputTable} name="titulo" placeholder="Título" autoComplete="off" />

            </th>
            <th align="left">
              <AiOutlineSearch />

              <input type="number" onChange={inputTable} name="id" placeholder="ID" autoComplete="off" />
            </th>
            <th align="left">

              <select onChange={inputTable} name="status">
                <option value="" selected>Não concluídas</option>
                <option name="Abertura" value="Abertura">Abertura</option>
                <option name="Análise Inicial" value="Análise Inicial">Análise Inicial</option>
                <option name="Relatório Final" value="Relatório Final">Relatório Final</option>
                <option name="Concluída" value="Concluída">Concluída</option>
              </select>
            </th>
            <th align="left">

              <select onChange={inputTable} name="categoria">
                <option value="" selected>Sem restrição</option>
                <option value="Contratos">Contratos</option>
                <option value="Esclarecimentos">Esclarecimentos</option>
                <option value="Investimentos">Investimentos</option>
                <option value="Outros">Outros</option>
              </select>
            </th>
            <th colSpan="4" align="left">

              <select onChange={inputTable} name="autor">
                <option value="" selected>Autor/Cliente</option>
                {userAndClient.map((element) => (
                  <option value={element}>{element}</option>

                ))}
              </select>
            </th>
            {/* <th>BOTAO</th> */}
          </tr>
        </thead>
        {' '}
        <thead>
          <tr>
            <th align="left">Título</th>
            <th align="left">ID</th>
            <th align="left">Status</th>
            <th align="left">Categoria</th>
            <th align="left">Data Inicial</th>
            <th align="left">Última atualização</th>
            <th align="left">Atendente</th>
            <th align="left">Cliente</th>
            <th align="left">Botao</th>

          </tr>
        </thead>

        { dataBase.map((element) => (
          <tbody>
            <tr align="left">
              <td align="left">{element.titulo}</td>
              <td align="left">{element.id}</td>
              <td align="left">{element.status}</td>
              <td align="left">{element.categoria === null || !(['Contratos', 'Esclarecimentos', 'Investimentos'].includes(element.categoria)) ? 'Outros' : element.categoria}</td>
              {/* <td>{element.categoria === ('Contratos' || 'Esclarecimentos' || 'Investimentos') || element.categoria !== null &&  ? element.categoria : 'Outros'}</td> */}
              <td align="left">{element.dataInicial}</td>
              <td align="left">{element.ultimaAtualizacao}</td>

              <td align="left">{element.atendente}</td>
              <td align="left">
                {/* <AiOutlineUserDelete /> */}
                {element.cliente}
                {' '}

              </td>
              <td>
                <AiOutlineEdit onClick={() => editHandler(element)} style={{ cursor: 'pointer', margin: '3px' }} />
                <AiOutlineDelete onClick={() => deleteHandler(element.id)} style={{ cursor: 'pointer', margin: '3px' }} />
              </td>

            </tr>
          </tbody>

        ))}

      </table>
    </>
  );
}

export default Table;
