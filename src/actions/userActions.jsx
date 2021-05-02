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
const deleteAction = (payload) => async (dispatch) => {
  await axios.delete(`http://localhost:3300/solicitacoes/${payload}`)
  const { data } = await axios.get('http://localhost:3300/solicitacoes');
  const user = await axios.get('http://localhost:3300/usuarios');
  const userAndClients = data.map((element) => element.cliente).concat((user.data.map((element) => element.nome))).filter((element, index, argument) => argument.indexOf(element) === index);
  dispatch(users(user.data));
  dispatch(response(data));
  dispatch(userAndClient(userAndClients));
  }
const postUser = (payload) => async (dispatch) => {
  await axios.post('http://localhost:3300/usuarios', { ...payload });
  const { data } = await axios.get('http://localhost:3300/solicitacoes');
  const user = await axios.get('http://localhost:3300/usuarios');
  const userAndClients = data.map((element) => element.cliente).concat((user.data.map((element) => element.nome))).filter((element, index, argument) => argument.indexOf(element) === index);
  dispatch(users(user.data));
  dispatch(response(data));
  dispatch(userAndClient(userAndClients));
  }
const fetchAPI = (payload) => async (dispatch) => {
  const { data } = await axios.get('http://localhost:3300/solicitacoes');
  const user = await axios.get('http://localhost:3300/usuarios');
  const saver = data.map((element) => (element.categoria === null || !(solicitacioess.includes(element.categoria)) ? 'Outros' : element.categoria))
  console.log(saver, data)
  const saver2 = solicitacioess2.map((element) => ({ name: element, value: (saver.filter((e) => e === element).length) }))
  console.log(saver2);
  // const solicitations = data.map((element) => ({ name: element.titulo, value: 1 }))
  const statusData = data.map((element) => ({ name: element.status, value: 1 }))
  const teste = statusDasSolicitacoes.map((element) => ({ ...element, value: statusData.filter((el) => el.name == element.name).length }))
  const userAndClients = data.map((element) => element.cliente).concat((user.data.map((element) => element.nome))).filter((element, index, argument) => argument.indexOf(element) === index);
  if (payload) dispatch(loader);
  dispatch(solicitation(saver2));
  dispatch(status(teste));
  dispatch(users(user.data));
  dispatch(userAndClient(userAndClients));
  }
  const filter = (payload) => async (dispatch) => {
    const { data } = await axios.get('http://localhost:3300/solicitacoes');
    let dataWithCategory = data.map((element) => (element.hasOwnProperty('categoria') ? { ...element } : { ...element, categoria: 'Outros' }))
    dataWithCategory = payload.titulo ? dataWithCategory.filter((element) => element.titulo.toLowerCase().includes(payload.titulo.toLowerCase())) : dataWithCategory
    dataWithCategory = payload.id ? dataWithCategory.filter((element) => element.id === +payload.id) : dataWithCategory;
    dataWithCategory = payload.status ? dataWithCategory.filter((element) => element.status.includes(payload.status)) : dataWithCategory;
    dataWithCategory = payload.categoria ? dataWithCategory.filter((element) => element.categoria.includes(payload.categoria)) : dataWithCategory;
    dataWithCategory = payload.autor ? dataWithCategory.filter((element) => element.cliente.includes(payload.autor) || element.atendente.includes(payload.autor)) : dataWithCategory;
    dispatch(filteredSolicitation(dataWithCategory));
    }

    const edit = (payload) => async (dispatch) => {
      console.log('ACTION');

    console.log(payload);
    let newestData = await axios.get(`http://localhost:3300/solicitacoes/${payload.id}`);
    console.log(newestData);
    newestData = newestData.data;
    newestData = { ...newestData, ...payload };
    console.log(newestData);

    await axios.put(`http://localhost:3300/solicitacoes/${payload.id}`, {
        ...newestData,
    })
    const { data } = await axios.get('http://localhost:3300/solicitacoes');
  const user = await axios.get('http://localhost:3300/usuarios');
  const userAndClients = data.map((element) => element.cliente).concat((user.data.map((element) => element.nome))).filter((element, index, argument) => argument.indexOf(element) === index);
  dispatch(users(user.data));
  dispatch(response(data));
  dispatch(userAndClient(userAndClients));
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
  // edit,
// eslint-disable-next-line semi
}