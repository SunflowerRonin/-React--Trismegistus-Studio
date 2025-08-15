import styled from "styled-components";
import cheeseWorm from '../../imagens/cheese-worm.jpg';
import talesOfASlumber from '../../imagens/tales-of-a-slumber.jpg';
import kosmozoid from '../../imagens/kosmozoid.PNG';
import daSilva from '../../imagens/da-silva.jpg';
import finin from '../../imagens/finin.jpg';
import pikmin from '../../imagens/pikmin.jpg';

const CatalogoContainer = styled.p`
display: grid;
grid-template-columns: 400px 400px 400px;
padding: 21.5px 0;
`

const JogoContainer = styled.a`
display: flex;
margin-left: 50px;
flex-direction: column;
align-items: flex-start;
color: white;
font-size: 24px;
align-text: center;
padding: 21.5px 0;
`
const CatalogoImagem = styled.img`
display: flex;
height: 300px;
width: 300px;
justify-content: center;
gap: 16px;
border: 4px solid white;
border-radius: 25px;
padding: 21.5px 0;
`

function JogoCatalogo() {
    return (
        <CatalogoContainer>
            <JogoContainer>
                <CatalogoImagem 
                src ={cheeseWorm}/>
                Cheese Worm
            </JogoContainer>
            <JogoContainer>
                <CatalogoImagem 
                src ={talesOfASlumber}/>
                Tales of a Slumber
            </JogoContainer>
            <JogoContainer>
                <CatalogoImagem 
                src ={kosmozoid}/>
                Kosmozoid
            </JogoContainer>
            <JogoContainer>
                <CatalogoImagem 
                src ={finin}/>
                Just a Thin One
            </JogoContainer>
            <JogoContainer>
                <CatalogoImagem 
                src ={pikmin}/>
                Not Pikmin
            </JogoContainer>
            <JogoContainer>
                <CatalogoImagem 
                src ={daSilva}/>
                Silva's Quest
            </JogoContainer>
        </CatalogoContainer>
    );
}

export default JogoCatalogo;