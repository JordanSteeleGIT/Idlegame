import styled from "styled-components";

export const ClickerScreen = styled.div`
  h1 {
    font-size: 40px;
    margin: 10px;
  }
  h4 {
    font-size: 20px;
    margin: 0 0 30px 0;
  }
`;
export const RedButton = styled.button`
  width: 220px;
  background-color: #19812c;
  height: 220px;
  border: none;
  border-radius: 100%;
  margin-top: 50px;
  transition: 0.1s;

  &:hover {
    background-color: #249739;
    cursor: pointer;
  }
  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;
