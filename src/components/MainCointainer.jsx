/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import PieChart from './PieChart';
import BarChart from './BarChart';
import start4 from '../start4.jpg';
import add from '../add.svg';
import Modal from './Modal';
import Table from './Table';

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
height:33vh;
`;
const FlexItem = styled.div`
display:flex;
justify-content: space-around;
align-items: center;
width:49%;
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
padding-top:20px;
`;
const Button = styled.button`
color:inherit;
background:rgb(244, 244, 250);
border:none;
width:40px;
height:40px;
// background-color:orange;
cursor:pointer;
`;
const Image = styled.img`
margin:0;
border:none;
`;
const TableWrapper = styled.div`
display:flex;
height:50%;
max-height:50%;
overflow-y: scroll;
width:100%;
max-width:100%;
margin:0;
  table {
    display: table;
    border: 3px solid rgb(233, 236, 248);
    width:100%;
    max-width:100%;
    border-radius:40px;
    overflow:hidden
    height:30%;
    // border-collapse: separate;
    border-spacing: 20px;
    input {
        // background: transparent;
        // border: none;
    }

  }


}
`;

function MainCointainer({
  isLoading, solicitation, status, functionModal, showModal, setShowModal, clickHandler, signHandler, dataBase, inputTable, filtered, userAndClient, setEdit, edit, editInfo, setEditInfo, editHandler, editData, deleteHandler,
}) {
  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} clickHandler={clickHandler} signHandler={signHandler} />
      <Modal edit={edit} setEdit={setEdit} setEditInfo={setEditInfo} editInfo={editInfo} />

      <MainWrapper>
        {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}

        <Loader type="Bars" color="#00BFFF" height={500} width={500} timeout={1000} />
        <Footer>
          <Image src={start4} width={55} />
          <Button onClick={functionModal}>
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
        <TableWrapper>
          <Table dataBase={filtered} isLoading={isLoading} inputTable={inputTable} userAndClient={userAndClient} editHandler={editHandler} editData={editData} deleteHandler={deleteHandler} />
        </TableWrapper>
      </MainWrapper>
    </>
  );
}

export default MainCointainer;
