import styled from "vue3-styled-components"
import '../styles/variables.css'

export const Project = styled.div`
    display: flex;
    justify-content: center;
    margin: 6%;
    margin-top: 8%;
    @media (max-width: 850px) {
        flex-direction: column;
    }
`

export const BoxDesc = styled.div`
    width: 60%;
    height: 60%;
    background-color: white;
    margin-top: -5%;
    margin-left: -20%;
    z-index: 2;
    -webkit-filter: drop-shadow(10px 10px 20px rgba(0 0 0 / 50%));
    padding: 1%;
    @media (max-width: 850px) {
        margin: 0;
    }
`

export const ProjectImage = styled.div`
    width: 60%;
    height: 60%;
    -webkit-filter: drop-shadow(-10px 10px 20px rgba(0 0 0 / 50%));
    z-index: 1;
    @media (max-width: 850px) {
        -webkit-filter: none;
    }
`

export const ProjectTitle = styled.h2`
    font-family: 'Title';
    text-align: center;
`

export const ProjectDesc = styled.p`
    text-align: center;
    font-family: 'Subtitle';
`