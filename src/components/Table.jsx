/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function Table({
  dataBase, isLoading, inputTable, userAndClient, editHandler, deleteHandler,
}) {
  return (
    <>
      <table>
        <thead>
          <tr>

            <input onChange={inputTable} name="titulo" />
            <input type="number" onChange={inputTable} name="id" />
            <select onChange={inputTable} name="status">
              <option value="" selected>STATUS</option>
              <option name="Abertura" value="Abertura">Abertura</option>
              <option name="Análise Inicial" value="Análise Inicial">Análise Inicial</option>
              <option name="Relatório Final" value="Relatório Final">Relatório Final</option>
              <option name="Concluída" value="Concluída">Concluída</option>
            </select>
            <select onChange={inputTable} name="categoria">
              <option value="" selected>CATEGORIA</option>
              <option value="Contratos">Contratos</option>
              <option value="Esclarecimentos">Esclarecimentos</option>
              <option value="Investimentos">Investimentos</option>
              <option value="Outros">Outros</option>
            </select>
            <select onChange={inputTable} name="autor">
              <option value="" selected>Autor/Cliente</option>
              {userAndClient.map((element) => (
                <option value={element}>{element}</option>

              ))}
            </select>
            <th>id</th>
            <th>status</th>
            <th>categoria</th>
            <th>atendente</th>
            <th>cliente</th>
          </tr>
        </thead>
        {' '}
        <thead>
          <tr>
            <th align="left">titulo</th>
            <th>id</th>
            <th>status</th>
            <th>categoria</th>
            <th>atendente</th>
            <th>cliente</th>
          </tr>
        </thead>

        { dataBase.map((element) => (
          <tbody>
            <tr>
              <td>{element.titulo}</td>
              <td>{element.id}</td>
              <td>{element.status}</td>
              <td>{element.categoria === null || !(['Contratos', 'Esclarecimentos', 'Investimentos'].includes(element.categoria)) ? 'Outros' : element.categoria}</td>
              {/* <td>{element.categoria === ('Contratos' || 'Esclarecimentos' || 'Investimentos') || element.categoria !== null &&  ? element.categoria : 'Outros'}</td> */}

              <td>{element.atendente}</td>
              <td>{element.cliente}</td>
              <button onClick={() => editHandler(element)}>Edit</button>
              <button onClick={() => deleteHandler(element.id)}>DELETE</button>
            </tr>
          </tbody>

        ))}

      </table>
    </>
  );
}

export default Table;
