import styled from "styled-components";

export const StyledHeader = styled.div`
  height: 50px;

  button {
    &:hover {
      background-color: #495157;
    }
  }
`;

export const HeaderButton = styled.button`
  width: 50%;
  height: 100%;
  background-color: transparent;
  border: none;
  font-size: 20px;
  border-radius: ${(props) => props.radius};
`;
