import styled from "styled-components";

export const Card = styled.div`
    background-color:white;
    padding:15px;
    border-radius:4px;
    margin-top:10px;
    -webkit-box-shadow: 1px 2px 2px 2px rgba(176,176,176,0.15); 
    box-shadow: 1px 2px 2px 2px rgba(176,176,176,0.15);
    display:flex;
    align-items:center ;
    div a {                      
      width: 300px;  
      text-overflow:ellipsis;
      overflow:hidden;
      white-space:nowrap;
    }

    .card-settings{
        display: flex;
        width: 100%;
        justify-content: flex-end;
        padding-right:10px ;
        position: relative;

        .create-at{
            margin:5px 0px 0px 0px;
            color: var(--bs-gray-500);
        }
        .btn-settings{
            margin-left: 25px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            padding: 6px;
            cursor: pointer;

            &:hover{
                background-color: var(--color-hover);
            }
        }
    }
    @media only screen and (max-width: 850px) {
        
        min-width:100% !important;

        .card-settings{
            .create-at{
                display:none ;
            }
            .btn-settings{
                margin-left:0px ;
            }
        }

        div a {                      
      width: 150px;  
      text-overflow:ellipsis;
      overflow:hidden;
      white-space:nowrap;
    }

    .body-card{
        margin-left:5px !important;
    }
    }
`