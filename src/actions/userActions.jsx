/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable eol-last */
import axios from 'axios';

const statusDasSolicitacoes = [{ name: 'Abertura', value: 1 }, { name: 'Análise Inicial', value: 0 }, { name: 'Relatório Inicial', value: 0 }, { name: 'Relatório Final', value: 0 }, { name: 'Concluída', value: 0 }]

const defaultAction = () => {
  return {
      type: 'DEFAULT',
  }
}

const loader = () => {
  return {
      type: 'LOADER',
  }
}

const response = (payload) => {
  return {
      type: 'RESPONSE',
      payload,
  }
}

const solicitation = (payload) => {
  return {
      type: 'SOLICITATION',
      payload,
  }
}

const status = (payload) => {
  return {
      type: 'STATUS',
      payload,
  }
}

const innerSize = (payload) => {
  return {
      type: 'INNER_SIZE',
      payload,
  }
}

const fetchAPI = () => async (dispatch) => {
  const { data } = await axios.get('http://localhost:3300/solicitacoes');
  const solicitations = data.map((element) => ({ name: element.titulo, value: 1 }))
  const statusData = data.map((element) => ({ name: element.status, value: 1 }))
  // const newStatusData = statusData.concat(statusDasSolicitacoes);
  const teste = statusDasSolicitacoes.map((element) => ({ ...element, value: statusData.filter((el) => el.name == element.name).length }))
  console.log(teste);
  dispatch(loader);
  dispatch(response(data));
  dispatch(solicitation(solicitations));
  dispatch(status(teste));
  }

export default {
  defaultAction,
  fetchAPI,
  response,
  loader,
  solicitation,
  innerSize,
// eslint-disable-next-line semi
}