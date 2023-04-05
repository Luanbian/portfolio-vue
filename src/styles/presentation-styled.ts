import styled from "vue3-styled-components";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Title = styled.h1`
  color: #3d3f40;
  font-size: 3.0rem;
`

export const Bar = styled.div`
  background-image: linear-gradient( to right, #7416dd, #13c7e3 );
  width: 200px;
  height: 5px;
`

export const Subtitle = styled.h2`
  color: #868686;
  font-size: 1.5rem;
`

export const PerfilPhoto = styled.img`
  width: 22%;
  height: 22%;
`

export const Square = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1d2528;
  width: 100%;
  max-width: 100vw;
  height: 170px;
`

export const Phrase = styled.p`
  color: #b2bbc1;
  font-size: 1.2rem;
  margin: 2%;
`

export const Button = styled.button`
  background-image: linear-gradient( to right, #7416dd, #13c7e3 );
  margin: 5%;
  color: #f7f7f7;
  border-radius: 5px;
  border-color: #f7f7f7;
  font-size: 1rem;
  width: 150px;
  height: 50px;
  &:hover {
    cursor: pointer;
  }
`
