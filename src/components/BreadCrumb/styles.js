import styled from "styled-components";

export const BreadCrumbStyle = styled.section`
box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%) !important;
  padding: 5px 8px;
  border-radius: 5px;
  background-color: white;
  display: flex;
  align-items: center;
  height: fit-content;
  position: absolute;
  bottom: 20px;
  left: 220px;

  div {
    display: flex;
    align-items: center;
  }
  
  a {
      color: var(--text-color-header);
      transition: 0.3s ease;
 
    &:hover {
      color: var(--primary-color);
      text-decoration: underline;
    }
    
    .bread-para {
      margin: 0;
      padding: 6px;
    }
  }

  @media(max-width:500px) {
    display: none;
  }
`