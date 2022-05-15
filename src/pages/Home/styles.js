import styled from "styled-components";

export const Image = styled.img`
    border-radius: 50%;
    border: solid 8px white;
    width: 12rem;
    height: 12rem;
    object-fit: cover;
`;

export const HeaderHome = styled.header`
    background-color: var(--primary-color);
    height: 180px;
    width: 100%;
    
    .qrcode-section{
        position:absolute ;
        top:20px ;
        right:20px ;
        .qrcode-image{
            width:25px ;
            height:25px ;
            
        }
    }
        
    @media (max-width: 990px) {
        .link-column {
            margin-top: 190px;
            margin-left: 0 !important;
        }
    }
    @media (max-width: 500px) {
        .header-image-avatar {
            display: flex;
            justify-content: center;
        }
        .link-column{
            margin-bottom:40px ;
        }
    }
`;
export const PaineButton = styled.section`
   
    display: flex;
    position: absolute;

    align-items: center;
    top: -65px;
    button {
        color: white !important;
        &:first-child {
            margin-right: 10px;
        }
        img {
            margin-right: 10px;
            width:20px ;
            height:20px ;
        }
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

    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        width: 94%;
        margin-top: -100px;

        button {
            width: 100%;
            margin-bottom: 10px;
            margin-right:0px ;
            &:first-child {
                margin-right: 0px;
            }
        }
        a {
            width: 100%;
        }
        a button {
            width: 100%;
            margin-bottom: 10px;
        }
    }
`;
