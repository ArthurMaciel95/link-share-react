import styled from "styled-components";


export const CardSkeleton = styled.div`
 background-color:white;
    padding:15px;
    border-radius:4px;
    margin-top:10px;
    -webkit-box-shadow: 1px 2px 2px 2px rgba(176,176,176,0.15); 
    box-shadow: 1px 2px 2px 2px rgba(176,176,176,0.15);
    display:flex;
    .block-skeleton{
        width: 45px;
        height: 45px;
        background-color:red;
        margin: 5px;
        animation: skeleton-animation 1s linear infinite alternate;
    }

    @keyframes skeleton-animation {
        0%{
            background-color: #EAEAEA;
        }
        100%{
            background-color: #CACACA;
        }
    }

    span:nth-child(1){
        animation: skeleton-animation 1s linear infinite alternate;
        height: 25px;
        width: 150px;
        display: flexbox;
        


    }
    span:nth-child(2){
        margin-top: 10px;
        animation: skeleton-animation 1s linear infinite alternate;
        display: flex;
        height: 20px;
        width: 50px;
    }

`