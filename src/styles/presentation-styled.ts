import styled from "vue3-styled-components";
import './variables.css';
import '../../assets/fonts/fonts.css';

export const Titlee = styled.h1`
  font-family: 'Title';
  color: var(--title-color);
  font-size: 3.0rem;
`

export const Mainn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
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
  width: 22%;
  height: 22%;
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
  font-family: 'Subtitle';
  color: var(--light-color);
  border-radius: 5px;
  border-color: var(--light-color); 
  font-size: 1rem;
  width: 150px;
  height: 50px;
  &:hover {
    cursor: pointer;
  }
`
export const BoxAbout = styled.div`
  border: var(--square-color) 1px solid;
  width: 35%;
  padding: 2%;
  box-shadow: 20px 30px 40px rgba(0 0 0 / 50%);
`