/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {

  button{
    cursor:pointer;

  }

  select {
    background-color: transparent;
    border:none;
    align-items: start;
      -webkit-appearance: none;
    -moz-appearance : none;
  }

  select:focus {
    outline:none !important;
  }

  input {
    background-color: transparent;
    border:none;
  }
  input:focus {
    outline:none !important;
  }
  color:rgb(54,64,97);
  box-sizing: border-box;
  margin:2%;
  font-family:  Arial;
  font-size:15px;
    ::-webkit-scrollbar {
      display: none;
    }
  }
html {

background-color:rgb(231,232,238);
  margin:10px;
}

body{
  border-radius: 40px;
  background-color: rgb(244, 244, 250);

}

svg.recharts-surface tspan {
font-size: 13px !important;
color: black !important;
font-family:  Arial;
}
`;
