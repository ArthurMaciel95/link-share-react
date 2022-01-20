import styled from "styled-components";

const ButtonBase = styled.button.attrs(() => ({ type: "button" }))`
display:flex;
justify-content:center;
align-items:center;
    margin:0.3rem;
    width: 100%;
    max-width:180px;
    height: 40px;
    border: 0;
    border-radius: 5px;
    border: white  2px solid;
    font-weight: 600;
    font-size: 1rem;
    padding:20px;
 
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
    
    border-radius:25px;
    max-width: 230px;
    color:white;
    transition: color, background 0.3s ease;
    &:hover {
        background-color: var(--primary-color-hover);
        transition: filter 0.3s ease, background 0.3s ease;
    }
    img{
        margin-right: 10px;
    }
`

export const Outline = styled(ButtonBase)`
   
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: transparent;
    color:var(--primary-color);
    width:auto;
    border-radius:25px;
    border: var(--primary-color)  2px solid;
    transition: color 0.3s ease, background 0.3s ease;

    &:hover {
        
    }

`