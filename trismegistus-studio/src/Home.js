import React from "react";
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import Header from './componentes/Header';
import JogoCatalogo from './componentes/JogoCatalogo';
import Footer from "./componentes/Footer";


const AppConteiner = styled.div`
background: rgb(85,78,101);
background: linear-gradient(0deg, rgba(85,78,101,1) 0%, rgba(59,48,77,1) 100%);
`
function Home() {
  return (
    <AppConteiner>
      <Header/>
      <JogoCatalogo/>
      <Footer/>
    </AppConteiner>
  );
}
export default Home;