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
        
    @media (max-width: 1200px) {
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
    }
`;
export const PaineButton = styled.section`
    justify-content: end;
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
        }
    }

    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        width: 90%;
        margin-top: -100px;

        button {
            width: 100%;
            margin-bottom: 10px;
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
