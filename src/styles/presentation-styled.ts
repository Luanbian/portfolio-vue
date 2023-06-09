import styled from "vue3-styled-components";
import './variables.css';
import '/public/fonts/fonts.css';

export const Titlee = styled.h1`
  font-family: 'Title';
  color: var(--title-color);
  font-size: 3.0rem;
`

export const Mainn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`

export const Present = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`

export const Bar = styled.div`
  background-image: linear-gradient( to right, var(--to), var(--from));
  width: 200px;
  height: 5px;
`

export const Subtitle = styled.h2`
  font-family: 'Subtitle';
  color: var(--subtitle-color);
  font-size: 1.5rem;
`

export const PerfilPhoto = styled.img`
  width: 300px;
  -webkit-filter: drop-shadow(20px 30px 40px rgba(0 0 0 / 50%));
`

export const Square = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--square-color);
  width: 100%;
  max-width: 100vw;
  height: 170px;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`

export const Phrase = styled.p`
  color: var(--description-color);
  font-family: 'Subtitle';
  font-size: 1.2rem;
  margin: 2%;
`

export const Buttonn = styled.button`
  background-image: linear-gradient( to right, var(--to), var(--from));
  margin: 5%;
  padding: 1%;
  font-family: 'Subtitle';
  color: var(--light-color);
  border-radius: 5px;
  border-color: var(--light-color); 
  font-size: 1.0rem;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 500px) {
    padding: 2%;
  }
`
export const BoxAbout = styled.div`
  border: var(--square-color) 1px solid;
  width: 35%;
  padding: 2%;
  box-shadow: 20px 30px 40px rgba(0 0 0 / 50%);
  @media (max-width: 1020px) {
    width: 80%;
  }
  @media (max-width: 700px) {
    box-shadow: none; 
  }
`