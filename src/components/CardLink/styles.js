import styled from "styled-components";

export const Card = styled.div`
    background-color:white;
    padding:15px;
    border-radius:4px;
    margin-top:10px;
    -webkit-box-shadow: 1px 2px 2px 2px rgba(176,176,176,0.15); 
    box-shadow: 1px 2px 2px 2px rgba(176,176,176,0.15);
    display:flex;

    @media only screen and (max-width: 850px) {
        flex-direction: column;
    }
`