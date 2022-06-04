import styled from "styled-components";

export const ModalNewLinkOverlay = styled.section`
    background-color: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    position: fixed;
    z-index: 1000;
`

export const ModalNewLink = styled.div`
    background-color: white;
    flex-direction: column;
    display: flex;
    gap:1rem;
    min-width:500px ;

    @media screen and (max-width:500px){
        gap:20px;
        width:100% ;
        min-width:100% ;
    }
`