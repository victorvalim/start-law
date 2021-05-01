/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  /* background-color: rgb(244, 244, 250); */
  /* background-color: red; */
  margin:2%;
  font-size:15px;
  ::-webkit-scrollbar {
    display: none;
  }
}
html {

background-color:rgb(231,232,238);
  margin:10px;
  /* margin-left: 30px;
  margin-right: 30px; */

}
body{
  border-radius: 40px;
  background-color: rgb(244, 244, 250);

}


svg.recharts-surface tspan {
font-size: 10px !important;
color: black !important;
font-family:  Arial;
}
`;
