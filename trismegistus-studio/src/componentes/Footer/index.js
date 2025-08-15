import styled from "styled-components";
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
background: #21002d;
`

const FooterInfo = styled.a`
padding: 5% 0 0 8%;
font-size: 32px;
color: white;
`

function Footer() {
    return(
        <FooterContainer>
            <FooterInfo>Contato: abualbuabalbuba</FooterInfo>
        </FooterContainer>
    )
}

export default Footer;