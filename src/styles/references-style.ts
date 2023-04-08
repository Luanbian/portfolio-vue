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
    @media (max-width: 600px) {
        flex-direction: column;
    }
`

export const Refe = styled.p`
    font-family: 'Subtitle';
    float: right;
    color: var(--subtitle-color);
    margin-bottom: 10%;
`

export const TextRefe = styled.h2`
    font-family: 'Subtitle';
    color: var(--light-color);
    z-index: 2;
    margin-left: -15%;
    margin-top: 18%;
`