import styled from "styled-components";
import { keyframes, css } from "styled-components";

const rotate = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

export const ClickPanelStyles = styled.div`
  display: flex;
  height: 120px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;
`;
export const UpgradeButtonStyled = styled.button`
  width: 150px;
  height: 50px;
  background-color: ${({ secondaryColor }) => secondaryColor};
  border: none;
  position: relative;
  z-index: 1;
  border-radius: 20px;
  padding-bottom: 8px;
  transition: filter 0.2s;
  color: white;
  font-size: 18px;
  ${({ bigger, clicked }) =>
    bigger === true &&
    clicked &&
    css`
      animation: ${rotate} 0.5s linear;
    `}

  &:before {
    content: "";
    width: 150px;
    height: 50px;
    background-color: ${({ primaryColor }) => primaryColor};
    border: none;
    position: absolute;
    top: -6px;
    left: 0;
    height: 50px;
    z-index: -1;
    border-radius: 20px;
  }
  &:hover {
    filter: brightness(1.1);
    cursor: pointer;
  }
  &:active {
    padding-bottom: 4px;
    &:before {
      transform: translateY(3px);
      top: -6px;
    }
  }
`;

export const ButtonExtraData = styled.div`
  background-color: #eaeaea;
  width: 80%;
  height: 65%;
  margin: 0 auto;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -15px;
    border-width: 15px;
    border-style: solid;
    border-color: transparent transparent #eaeaea transparent;
  }

  ul {
    padding: 10px;
  }
  li {
    list-style: none;
    text-align: left;
    color: black;
  }
`;
