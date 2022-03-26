import styled from "styled-components";

export const ModalOverlay = styled.section`

    h3{
        text-align: center;
        margin-bottom: 25px;
        color: #717171;
    }

    background-color: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    position: absolute;
    z-index: 1000;

    @media screen and (max-width:500px){
        position:fixed ;
    }
`

export const ModalArea = styled.div`
    background-color:white ;
    display:grid ;
    
    
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width:50% ;
    max-width:750px;
    min-width:550px ;
    padding:50px ;
    margin:0 auto ;
    position:relative ;
    @media screen and ( max-width:500px){
        position:fixed ;
        min-width: 100% ;
      
        display:grid ;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr 1fr ;
        padding:25px ;
    }
`