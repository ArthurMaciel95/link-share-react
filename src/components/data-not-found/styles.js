import styled from "styled-components";

export const NoData = styled.section`
    width:100%;
    background-color:white;
    border: dashed 3px #B7B2B2;
    border-radius:5px;
    padding:40px;
    min-height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    flex-direction:column;
`

export const Paragraph = styled.p`
    color:#B7B2B2;
    font-weight:400;
`

export const HeaderText = styled.h3`
    margin-bottom:20px;
    color:#929292;
`

export const ButtonAddLink = styled.button`
    border-radius:25px;
    background-color:var(--primary-color);
    padding:10px 40px;
    color:white;
    border:none;
    font-weight:700;
    transition:background-color 0.3s ease;
    &:hover{
        background-color:#D15252;
        transition:background-color 0.3s ease;
    }

`