import styled from "styled-components";

export const BreadCrumbStyle = styled.section`
  display: flex;
  align-items: center;
  height: fit-content;
  position: absolute;
  bottom: 20px;
  left: 220px;
  a{
      color: var(--text-color-header);
      transition: 0.3s ease;
 
      &:hover{
          color: var(--primary-color);
        
          text-decoration: underline;
      }
    .bread-para{
      margin: 0;
      padding: 6px;

     
  }
  }
`