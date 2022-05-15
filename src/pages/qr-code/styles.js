import styled from "styled-components";

export const QrContainer = styled.main`
    background: rgb(236,62,43);
    background: linear-gradient(90deg, rgba(236,62,43,1) 25%, rgba(255,145,107,1) 100%);
    width:100% ;
    height:100% ;
    display:flex ;
    padding:30px;
    justify-content:center ;
    align-items:center;
`

export const QrCard = styled.section`
    background-color:white;
    width:400px ;
    height:650px ;
    border-radius:8px ;
    flex-direction:column ;
    position:relative ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
`

export const qrcodeArea = styled.div`
 height:33% ;
`