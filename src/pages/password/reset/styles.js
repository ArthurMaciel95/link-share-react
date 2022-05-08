import styled from "styled-components";


export const HeaderStyles = styled.header`
    background-color:var(--primary-color) ;
    height:30vh;

`

export const FormContainer = styled.section`
    width:100vw;
    height:70vh;
    position:relative;
    display:flex ;
    justify-content:center ;
  
    form{
        padding:20px 40px;
        
        top:-100px ;
        position: absolute ;
        max-width:500px ;
        background-color:white;
        height:auto ;
        border-radius:4px;
        box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%) !important;
        display:flex ;
        flex-direction: column ;
        align-items:center ;
        img{
            width:150px;
            height:150px;
            margin-bottom:20px ;
        }
        p{
            margin-top:10px ;
            text-align:center ;
        }
     
        button{
            margin-top:20px ;
        }

        @media screen and (max-width:500px){
            top: -100px;
            position: absolute;
            margin: 0px 10px;
        }
    }
`