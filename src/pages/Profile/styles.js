import styled from "styled-components";


export const Image = styled.img`
    border-radius:50%;

    width: 12rem;
    height:12rem;
    object-fit: contain;
`


export const HeaderHome = styled.header`
    background-color:var(--primary-color);
    height:180px;
    width:100%;
    @media screen and (max-width:500px){
        justify-content: center;
    }
`

export const PaineButton = styled.section`
    justify-content:end;
    display:flex;
    position:absolute;
    top:-70px;

`