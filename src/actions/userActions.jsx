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
const fullSolicitation = (payload) => {
  return {
      type: 'FULL_SOLICITATION',
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

const postAPI = (payload) => async (dispatch) => {
  const newSolicitation = {
 status: 'Abertura', titulo: payload.titulo, atendente: payload.atendente, cliente: payload.cliente, categoria: payload.categoria,
}
  await axios.post('http://localhost:3300/solicitacoes', { ...newSolicitation });
  const { data } = await axios.get('http://localhost:3300/solicitacoes');
  const solicitations = data.map((element) => ({ name: element.titulo, value: 1 }))
  const statusData = data.map((element) => ({ name: element.status, value: 1 }))
  const teste = statusDasSolicitacoes.map((element) => ({ ...element, value: statusData.filter((el) => el.name == element.name).length }))
  dispatch(solicitation(solicitations));
  dispatch(status(teste));
  dispatch(response(data));
  }

const users = (payload) => {
  return {
      type: 'USERS',
      payload,
  }
}

const postUser = (payload) => async (dispatch) => {
  await axios.post('http://localhost:3300/usuarios', { ...payload });
  const user = await axios.get('http://localhost:3300/usuarios');
  console.log(user);
  dispatch(users(user.data));
  }
const fetchAPI = (payload) => async (dispatch) => {
  const { data } = await axios.get('http://localhost:3300/solicitacoes');
  const user = await axios.get('http://localhost:3300/usuarios');
  const solicitations = data.map((element) => ({ name: element.titulo, value: 1 }))
  const statusData = data.map((element) => ({ name: element.status, value: 1 }))
  // const newStatusData = statusData.concat(statusDasSolicitacoes);
  const teste = statusDasSolicitacoes.map((element) => ({ ...element, value: statusData.filter((el) => el.name == element.name).length }))
  if (payload) dispatch(loader);
  dispatch(response(data));
  dispatch(solicitation(solicitations));
  dispatch(status(teste));
  dispatch(users(user.data));
  console.log(data, 'TENTATIVA');
  }

export default {
  defaultAction,
  fetchAPI,
  response,
  loader,
  solicitation,
  innerSize,
  users,
  postAPI,
  postUser,
  fullSolicitation,
// eslint-disable-next-line semi
}