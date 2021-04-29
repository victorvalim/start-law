/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import PieChart from './PieChart';
import BarChart from './BarChart';
import start4 from '../start4.jpg';
import add from '../add.svg';

const MainWrapper = styled.div`
width:95vw;
max-width:95vw;
height:100vh;
margin:auto;
// background-color: rgb(244, 244, 250);

`;
const ChartsWrapper = styled.div`
display:flex;
flex-wrap: nowrap;
justify-content:space-between;
height:33%;
`;
const FlexItem = styled.div`
display:flex;
justify-content: space-around;
align-items: center;
width:48%;
height:100%;
background-color:rgb(252,252,252);
border-radius:25px;
margin:0;
`;

const Footer = styled.div`
display:flex;
justify-content:flex-start;
flex-wrap: nowrap;
align-items: center;
width:100%;
height:5%;
// background-color:black;
margin:0;
`;
const Button = styled.button`
color:inherit;
background:rgb(244, 244, 250);
border:none;
width:40px;
height:40px;
// background-color:orange;
`;
const Image = styled.img`
margin:0;
border:none;
`;

function MainCointainer({ isLoading, solicitation, status }) {
  return (
    <MainWrapper>
      <Loader type="Bars" color="#00BFFF" height={500} width={500} timeout={1000} />
      <Footer>
        <Image src={start4} width={55} />
        <Button>
          <img src={add} width={40} />
        </Button>
      </Footer>
      <ChartsWrapper>
        <FlexItem>
          <BarChart data={status} />
        </FlexItem>
        <FlexItem>
          <PieChart data={solicitation} />
        </FlexItem>
      </ChartsWrapper>
    </MainWrapper>
  );
}

export default MainCointainer;
