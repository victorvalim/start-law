/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function Table({ dataBase, isLoading }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <input name="titulo" />
            <input name="id" />

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
              <td>{element.categoria === null ? 'Outros' : element.categoria}</td>
              <td>{element.atendente}</td>
              <td>{element.cliente}</td>
            </tr>
          </tbody>

        ))}

      </table>
    </>
  );
}

export default Table;
