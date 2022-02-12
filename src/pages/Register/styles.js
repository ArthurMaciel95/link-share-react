import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    margin: 0px;
    padding: 0px;

    @media only screen and (max-width: 850px) {
        flex-direction: column;
    }
`

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50vw;
    height: 100vh;
    margin: 0px;
    padding: 20px;

    .max-width img{
        max-width: 350px !important;
    }

    .max-width h3{
        margin-top: 50px;
        font-size:1.6rem;
    }

    &.links{
        background-color:  var(--primary-color);
        text-align: center;

        img {
            width:100%;
            max-width: 500px;
        }
    }
    & a {
        padding:12px;
        color: #fff;
        text-decoration: none;
        font-weight: 500;
        margin: 0px;
    }
    & a:hover {
        color: rgb(78, 78, 78);
        text-decoration: underline;
    }
    & h3 {
        font-size: 2rem;
        color: #fff;
        font-weight: bold;
        padding:9px;
        margin:0px;
    }

    @media only screen and (max-width: 850px) {
        width: 100vw;
        height: 50vh;
    }
}`