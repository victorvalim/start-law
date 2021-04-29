/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const MainWrapper = styled.div`
width:90vw;
max-width:90vw;
height:100vh;
margin:auto;
background-color: white;
`;
function MainCointainer({ isLoading }) {
  return (
    <MainWrapper>
      <Loader type="Bars" color="#00BFFF" height={500} width={500} timeout={1000} />
    </MainWrapper>
  );
}

export default MainCointainer;
