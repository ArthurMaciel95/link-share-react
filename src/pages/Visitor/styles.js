import styled from "styled-components";

export const Image = styled.img`
    border-radius: 50%;
    border: solid 8px white;
    width: 12rem;
    height: 12rem;
    object-fit: cover;
`

export const HeaderHome = styled.header`
    background-color:var(--primary-color);
    height:180px;
    width:100%;

    @media (max-width: 1200px){
        .link-column{
            margin-top: 80px;
            margin-left: 0 !important;
        }
    }

    @media (max-width:500px){
        .header-image-avatar{
            display: flex;
            justify-content: center;
        }
    }
`
export const PaineButton = styled.section`
    justify-content:end;
    display:flex;
    position:absolute;
    top:-70px;

    @media (max-width:500px){
        top:-160px
    }
`