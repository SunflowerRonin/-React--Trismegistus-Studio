import styled from 'styled-components';
import logo from '../../imagens/Trismegistus-Logo.png';

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
  margin-left: 150px;
  gap: 16px;
`

const LogoImage = styled.img`
  margin-left: -430px;
  max-height: 120px;
  max-width: 200px;
`

const LogoNome = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Jura:wght@300..700&display=swap');

font-family: "Jura", sans-serif;
font-size: 32px;
color: #ffffff;
 

`

function Logo () {
    return (
        <LogoContainer>
          <LogoImage 
            src={logo} 
            alt='Logo da Trismegistus Studio'
          />
          <LogoNome><strong>Tristmegistus Studio</strong></LogoNome>
        </LogoContainer>
    );
}

export default Logo;