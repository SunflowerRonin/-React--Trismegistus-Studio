import styled from "styled-components";
import Logo from '../Logo';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
background: #21002d;
display: flex;
justify-content: center;

`

const HeaderOpcoes = styled.a`
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

font-family: "Kanit", sans-serif;


padding: 5% 0 0 8%;
font-size: 32px;
color: #ffffff;
`

function Header () {
    return (
        <div>
            <HeaderContainer>
                <Logo/>
                 <HeaderOpcoes>Jogos</HeaderOpcoes>
                 <HeaderOpcoes>Contato</HeaderOpcoes>
            </HeaderContainer>
        </div>


    );
}

export default Header;