import styled from "styled-components";

export const Container = styled.form`
    margin: 1rem 0;
    width: 100%;
    padding:5px;

    h2 {
      padding-top:5px;
    }

    &.login-width {
        max-width: 350px;
    }
    &.register-width{
        max-width: 450px;
    }
    input:hover {
        border: var(--primary-color)  2px solid;
    }
`
export const Group = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1px;
    margin:0.30rem;
    margin-bottom: 0.6rem;

    label {
        color: #18191F;
        font-size: 0.85rem;
    }
    input {
        width: 100%;
        height: 46px;
        border: white  2px solid;
        padding: 0.9rem;
        border-radius: 5px;
        background-color: #fff;
        font-size: 1.1rem;

        &:focus {
          outline: none;
        }
        &.round {
            border-radius: 25px;
        }
    }
`
export const GroupContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 95%;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`