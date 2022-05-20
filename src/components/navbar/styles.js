import styled from "styled-components";

export const NavbarStyle = styled.nav`
    .profile-nav-area{
        @media screen and (max-width:500px){
            display: none !important;
        }
        .rounded-circle{
            border:3px solid white ;
        }
    }
    .hamburger{
     display:none ;
    }
    @media screen and (max-width:500px){
        .hamburger{
            display:flex ;
        }
    }
`