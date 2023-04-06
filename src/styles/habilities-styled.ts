import styled from "vue3-styled-components"
import './variables.css';

export const Principal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const All = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 3%;
`

export const BoxIcon = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const ButtonAbout = styled.button`
    background-image: linear-gradient( to right, #a6a6a6, #767676);
    margin: 5%;
    color: white;
    border-radius: 5px;
    border-color: var(--light-color); 
    font-size: 1rem;
    width: 150px;
    height: 50px;
    &:hover {
        cursor: pointer;
    }
`