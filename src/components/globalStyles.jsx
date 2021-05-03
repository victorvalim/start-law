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


    //  background-color:rgb(231,232,238);
 }
 select:focus {
  outline:none !important;
}
  input {
   background-color: transparent;
   border:none;
   
  //  background-color:rgb(231,232,238);
}
input:focus {
  outline:none !important;
}
  // color:rgb(54,64,97);
  color:rgb(54,64,97);
  box-sizing: border-box;
  /* background-color: rgb(244, 244, 250); */
  /* background-color: red; */
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
  /* margin-left: 30px;
  margin-right: 30px; */

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
