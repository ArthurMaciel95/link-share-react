import styled from "styled-components";

export const Container = styled.section`
    background-color: white;
    border-radius: 4px;
    -webkit-box-shadow: 1px 2px 2px 2px rgba(176, 176, 176, 0.15);
    box-shadow: 1px 2px 2px 2px rgba(176, 176, 176, 0.15);
    padding: 30px;
    height: 100%;

    h3 {
        margin-bottom: 30px;
    }

    @media screen and (max-width: 500px) {
        padding: 15px;
    }
`;

export const InputArea = styled.div`
    display: flex;
    width: 100%;

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`;

export const Column = styled.div`
    width: 50%;

    &:first-child {
        padding: 0px 20px 0px 0px;
    }
    @media screen and (max-width: 500px) {
        width: 100%;
        padding: 0;
        &:first-child {
            padding: 0px 0px 0px 0px;
        }
    }
`;

export const ButtonArea = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-top: 20px;
`;

export const FileArea = styled.div`
    display: flex;
    margin-bottom: 20px;
    label {
        cursor: pointer;
    }
    section {
        margin-left: 30px;
        p {
            color: var(--text-color-header);
            text-decoration: underline;
            margin: 0;
        }
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;

        section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 0px;
        }
    }
`;
export const Form = styled.form``;

export const ImageArea = styled.div`
    position: relative;
    img {
        border-radius: 50%;
        height: 80px;
        width: 80px;
        object-fit: cover;
    }
    span {
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
        bottom: 0px;
        cursor: pointer;
        border: white 3px solid;
        img {
            width: 15px;
            height: 15px;
        }
    }
    @media screen and(max-width:500px) {
        img {
            span {
                bottom: 15px;
            }
        }
    }
`;
