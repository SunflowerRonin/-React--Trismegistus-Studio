import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import Header from './componentes/Header';
import JogoCatalogo from './componentes/JogoCatalogo';
import AppRoutes from './Routes';


const AppConteiner = styled.div`
background: rgb(48,48,48);
background: linear-gradient(0deg, rgba(48,48,48,1) 0%, rgba(162,161,161,1) 100%);
`
function App() {
  return (
<div>
  <AppRoutes/>
</div>
  );
}

export default App;
