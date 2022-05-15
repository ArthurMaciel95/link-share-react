import styled from "styled-components";

export const ClipBoardAreaStyle = styled.div`
    border-radius: 25px;
    max-width: 250px;

    .btn {
        height: 40px;
    }
    p {
        display: flex;
        align-items: center;
        margin: 0px;
        padding: 8px 15px;
        overflow: hidden;
        white-space: nowrap;
        color: var(--text-color-gray);
    }
    .btn p {
        color: var(--primary-color);
    }
    .icon-area {
        background-color: var(--primary-color);
        padding: 15px;
        border-radius: 0px 25px 25px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    @media screen and (max-width: 500px) {
        width: 100%;
        max-width: 100%;
    }
`;
