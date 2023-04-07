import styled from "vue3-styled-components"
import '../styles/variables.css'

export const Touch = styled.div`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient( to right, var(--to), var(--from));
    width: 100%;
    max-width: 100vw;
`

export const GetIn = styled.h1`
    font-family: 'Title';
    color: var(--light-color);
    text-align: center;
    margin: 3%;
`

export const Phone = styled.p`
    color: var(--light-color);
    font-size: 1.3rem;
    margin-left: 3%;
`

export const Card = styled.div`
    display: flex;
    margin: 5%;
`

export const BlockIcons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 100vw;
`

export const Block = styled.div`
    display: flex;
    width: 100%;
    max-width: 100vw;
`