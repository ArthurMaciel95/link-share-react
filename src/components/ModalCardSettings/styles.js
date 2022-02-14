import styled from "styled-components";

export const ModalCardSettings = styled.span`
z-index: 100;
    position: absolute;
    background-color: white;
    -webkit-box-shadow: 1px 2px 2px 2px rgba(176,176,176,0.15); 
    box-shadow: 1px 2px 2px 2px rgba(176,176,176,0.15);
    
    border-radius: 5px;
    top: 30px;
    right: -70px;
    color: var(--text-color-gray);

   p{
    padding: 15px;
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  

    &:not(:last-child){
        border-bottom: solid 1px var(--bs-gray-200);
    }
    &:hover{
        background-color: #F5F5F5;
    }
    cursor: pointer;
    .trash-icon{
        margin-right: 10px;
        width: 25px;
    
    }
   }
`