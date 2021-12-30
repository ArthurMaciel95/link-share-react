import styled from "styled-components";

const ButtonBase = styled.button.attrs(() => ({ type: "button" }))`
    margin:0.3rem;
    margin-top: 1rem;
    width: 100%;
    max-width:180px;
    height: 40px;
    border: 0;
    border-radius: 5px;
    border: white  2px solid;
    font-weight: 600;
    font-size: 1rem;
`

export const Save = styled(ButtonBase)`
    background-color: #06306F;
    color:#fff;
`
export const Info = styled(ButtonBase)`
    background-color: #0dc5c5;
`
export const Delete = styled(ButtonBase)`
    background-color: #eb0000;
    color:#000;
`
export const Warning = styled(ButtonBase)`
    background-color:   #e2b900;
    color:#000;
`
export const Confirm = styled(ButtonBase)`
    background-color:   #009200;
    color:#000;
`
export const Primary = styled(ButtonBase)`
    background-color:  var(--primary-color);
    color:#000;
    border-radius:25px;
    max-width: 230px;

    &:hover {
        border: var(--primary-color)  2px solid;
    }
`