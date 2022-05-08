import styled from "styled-components";

export const NotFoundStyled = styled.section`
margin: 0 auto;
margin-top: 100px;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
    .img-not-found{
        max-width: 70%;
        max-height: 300px;
    }

    @media screen and (max-width:500px){
        margin-top: 100px;
        height: 60%;
        .img-not-found{
            max-width: 100%;
            
        }
    }

`