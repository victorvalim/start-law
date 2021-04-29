/* eslint-disable arrow-body-style */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable eol-last */
import axios from 'axios';

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

const fetchAPI = () => async (dispatch) => {
  const { data } = await axios.get('http://localhost:3300/solicitacoes');
  console.log(data);
  dispatch(response(data));
  dispatch(loader);
  }
export default {
  defaultAction,
  fetchAPI,
  response,
  loader,
// eslint-disable-next-line semi
}