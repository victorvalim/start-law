/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
/* eslint-disable no-prototype-builtins */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable eol-last */
import axios from 'axios';

const statusDasSolicitacoes = [{ name: 'Abertura', value: 1 }, { name: 'Análise Inicial', value: 0 }, { name: 'Relatório Inicial', value: 0 }, { name: 'Relatório Final', value: 0 }, { name: 'Concluída', value: 0 }]
const solicitacioess = ['Contratos', 'Esclarecimentos', 'Investimentos'];
const solicitacioess2 = ['Contratos', 'Esclarecimentos', 'Investimentos', 'Outros'];

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

const users = (payload) => {
  return {
      type: 'USERS',
      payload,
  }
}

const userAndClient = (payload) => {
  return {
      type: 'USER_CLIENT',
      payload,
  }
}

const filteredSolicitation = (payload) => {
  return {
      type: 'FILTERED',
      payload,
  }
}

const editInfoATM = (payload) => {
  return {
      type: 'SHOULD_EDIT',
      payload,
  }
}

const editInfoData = (payload) => async (dispatch) => {
const { data } = await axios.get(`http://localhost:3300/solicitacoes/${payload}`)
dispatch(editInfoATM(data));
}

const atualization = (payload) => async (dispatch) => {
  const { data } = await axios.get('http://localhost:3300/solicitacoes');
  const user = await axios.get('http://localhost:3300/usuarios');
  const saver = data.map((element) => (element.categoria === null || !(solicitacioess.includes(element.categoria)) ? 'Outros' : element.categoria))
  const solicitationChartData = solicitacioess2.map((element) => ({ name: element, value: (saver.filter((e) => e === element).length) }))
  const statusData = data.map((element) => ({ name: element.status, value: 1 }))
  const statusChartData = statusDasSolicitacoes.map((element) => ({ ...element, value: statusData.filter((el) => el.name == element.name).length }))
  const userAndClients = data.map((element) => element.cliente).concat((user.data.map((element) => element.nome))).filter((element, index, argument) => argument.indexOf(element) === index);
  dispatch(solicitation(solicitationChartData));
  dispatch(status(statusChartData));
  dispatch(users(user.data));
  dispatch(userAndClient(userAndClients));
  }

const postAPI = (payload) => async (dispatch) => {
  const data = new Date();
  const formatedDate = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  const newSolicitation = {
   status: 'Abertura', titulo: payload.titulo, atendente: payload.atendente, cliente: payload.cliente, categoria: payload.categoria, dataInicial: formatedDate,
  }

  await axios.post('http://localhost:3300/solicitacoes', { ...newSolicitation });
    dispatch(atualization());
  }

const deleteAction = (payload) => async (dispatch) => {
  await axios.delete(`http://localhost:3300/solicitacoes/${payload}`);
  dispatch(atualization());
  }

const postUser = (payload) => async (dispatch) => {
  await axios.post('http://localhost:3300/usuarios', { ...payload });
  dispatch(atualization());
  }

const fetchAPI = (payload) => async (dispatch) => {
  dispatch(atualization());
  setTimeout(() => dispatch(loader()), 3000)
  }

const filter = (payload) => async (dispatch) => {
    const { data } = await axios.get('http://localhost:3300/solicitacoes');
    let dataWithCategory = data.map((el) => ({ ...el, notFilteredCategory: el.categoria })).map((element) => ({ ...element, categoria: (element.categoria === null || !(solicitacioess.includes(element.categoria)) ? 'Outros' : element.categoria) }))
    dataWithCategory = payload.titulo ? dataWithCategory.filter((element) => element.titulo.toLowerCase().includes(payload.titulo.toLowerCase())) : dataWithCategory
    dataWithCategory = payload.id ? dataWithCategory.filter((element) => element.id === +payload.id) : dataWithCategory;
    dataWithCategory = payload.status ? dataWithCategory.filter((element) => element.status.includes(payload.status)) : dataWithCategory;
    dataWithCategory = payload.categoria ? dataWithCategory.filter((element) => element.categoria.includes(payload.categoria)) : dataWithCategory;
    dataWithCategory = payload.autor ? dataWithCategory.filter((element) => element.cliente.includes(payload.autor) || element.atendente.includes(payload.autor)) : dataWithCategory;
    dispatch(filteredSolicitation(dataWithCategory));
    const user = await axios.get('http://localhost:3300/usuarios');
    const saver2 = solicitacioess2.map((element) => ({ name: element, value: (dataWithCategory.filter((e) => e.categoria === element).length) }))
    const statusData = dataWithCategory.map((element) => ({ name: element.status, value: 1 }))
    const teste = statusDasSolicitacoes.map((element) => ({ ...element, value: statusData.filter((el) => el.name == element.name).length }))
    dispatch(solicitation(saver2));
    dispatch(status(teste));
    dispatch(users(user.data));
    }

const edit = (payload) => async (dispatch) => {
    const data = new Date();
    const formatedDate = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} (${data.getMinutes()}:${data.getSeconds()})`;
    let newestData = await axios.get(`http://localhost:3300/solicitacoes/${payload.id}`);
    newestData = newestData.data;
    newestData = { ...newestData, ...payload, ultimaAtualizacao: formatedDate };
    await axios.put(`http://localhost:3300/solicitacoes/${payload.id}`, {
      ...newestData,
  })
    dispatch(atualization());
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
  filter,
  editInfoATM,
  edit,
  deleteAction,
  editInfoData,
// eslint-disable-next-line semi
}