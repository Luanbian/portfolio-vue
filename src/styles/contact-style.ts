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
    font-family: 'Subtitle';
    text-indent: 1.0rem;
    color: var(--light-color);
    font-size: 1.3rem;
`

export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5%;
    @media (max-width: 700px) {
        flex-direction: column;
    }
`

export const BlockIcons = styled.div`
    display: flex;
    max-width: 100vw;
    margin-left:2%;
    @media (max-width: 700px) {
        justify-content: center;
    }
`

export const Block = styled.div`
    display: flex;
    width: 100%;
    @media(max-width: 950px) {
        flex-direction: column;
        width: 10%;
    }
    @media(max-width: 700px) {
        flex-direction: row;
    }
`