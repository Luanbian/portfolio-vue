import styled from "vue3-styled-components"
import '../styles/variables.css'

export const Square = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--square-color);
    width: 100%;
    max-width: 100vw;
`

export const SquareRefe = styled.div`
    max-width: 40%; 
    padding: 2%;
    @media (max-width: 800px) {
        max-width: 100%;
    }
`

export const RefeTitle = styled.h1`
  font-family: 'Title';
    color: var(--light-color);
    font-size: 3.0rem;
`

export const All = styled.div`
    display: flex;
    width: 100%;
    max-width: 100vw;
    justify-content: space-around;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`

export const Refe = styled.p`
    font-family: 'Subtitle';
    float: right;
    color: var(--subtitle-color);
    margin-bottom: 10%;
`

export const TextRefe = styled.h3`
    font-family: 'Subtitle';
    color: var(--light-color);
    text-indent: 0.5rem;
    z-index: 2;
    margin-left: -5%;   
    margin-top: 8%;
`