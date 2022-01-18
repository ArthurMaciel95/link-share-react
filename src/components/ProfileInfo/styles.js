import styled from "styled-components";

export const Container = styled.section`
    background-color:white;
    border-radius:4px;
    -webkit-box-shadow: 1px 2px 2px 2px rgba(176,176,176,0.15); 
    box-shadow: 1px 2px 2px 2px rgba(176,176,176,0.15);
    padding:30px;
    height:100%;

    h3{
        margin-bottom: 30px;
    }
`


export const InputArea = styled.div`
    display:flex;
    width:100%;
    
`


export const Column = styled.div`
    width:50%;
    padding:0px 20px 0px 0px;

`

export const ButtonArea = styled.div`
    display:flex;
    width:100%;
    justify-content:flex-end;
    margin-top:20px;
`

export const FileArea = styled.div`
    display: flex;
  
    label{
        cursor: pointer;
    }
    section{
        margin-left: 30px;
        p{
            color: var(--text-color-header);
            text-decoration: underline;
        }
    }
`
export const Form = styled.form`


`

export const ImageArea = styled.div`
    position: relative;
img{
        border-radius: 50%;
        height: 80px;
        width: 80px;
        object-fit: cover;
    }
    span{
        position: absolute;
        color: white;
        font-weight: 600;
        background-color: var(--primary-color);
        border-radius: 50%;
        width: 30px;
        height: 30px;
        align-items: center;
        justify-content: center;
        display: flex;
        right: 0px;
        bottom: 13px;
        cursor: pointer;
        border: white 3px solid;
        img{
            width: 15px;
            height: 15px;
        }
    }


`
