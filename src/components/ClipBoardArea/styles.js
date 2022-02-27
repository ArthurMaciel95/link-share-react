import styled from "styled-components";

export const ClipBoardAreaStyle = styled.div`
   background-color:white;
    margin-left:15px ;
    font-size:1rem;
    border: solid 1px var(--primary-color);
    border-radius:25px;
    display:flex;
    max-width: 250px;
    height: 40px;
    margin: 7px 15px;
    p{
        display: flex;
        
        align-items:center;
        margin:0px;
        padding: 8px 15px;
        overflow:hidden;
        white-space:nowrap;
        color:var(--text-color-gray)
    }

    .icon-area{
        background-color:var(--primary-color);
        padding: 15px;
        border-radius:0px 25px 25px 0px ;
        display: flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
    }

`