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
    border: var(--square-color) 1px solid;
`

export const All = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 3%;
    @media (min-width: 500px) {
        box-shadow: 20px 30px 40px rgba(0 0 0 / 50%);
    }
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
    font-family: 'Subtitle';
    border-radius: 5px;
    border-color: var(--light-color); 
    font-size: 1rem;
    width: 150px;
    height: 50px;
    &:hover {
        cursor: pointer;
    }
`