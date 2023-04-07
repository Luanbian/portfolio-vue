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
    color: var(--light-color);
    font-size: 3.0rem;
`

export const All = styled.div`
    display: flex;
    width: 100%;
    max-width: 100vw;
    justify-content: space-around;
`

export const Refe = styled.p`
    float: right;
    color: var(--subtitle-color);
    margin-bottom: 10%;
`

export const TextRefe = styled.h2`
    color: var(--light-color);
    z-index: 2;
    margin-left: -15%;
    margin-top: 18%;
`