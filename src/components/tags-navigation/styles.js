import styled from "styled-components";

export const TagsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    border-radius: 5px;
    margin-bottom: 0.5rem;
`;

export const Tag = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #fff;
    align-items: center;
    width: auto;
    min-width: 6em;
    height: auto;
    padding: 3px;
    border-bottom: 2px solid  #fff;
    cursor: pointer;
    -webkit-box-shadow: 1px 2px 2px 2px rgba(176, 176, 176, 0.15);
    box-shadow: 1px 2px 2px 2px rgba(176, 176, 176, 0.15);

    &.selected {
        border-color:  var(--primary-color);
    }
    &:hover {
        border-color: var(--primary-color);
    }
    @media (max-width: 500px) {
        min-width: 5em;
    }
`;