import React, { FC } from "react";
import { StyledHeader, HeaderButton } from "./../Styles/Header.styled";

interface IHeaderProps {
  setPageToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header: FC<IHeaderProps> = ({ setPageToggle }) => {
  return (
    <StyledHeader>
      <HeaderButton radius="20px 0 0 0" onClick={() => setPageToggle(false)}>
        Button
      </HeaderButton>
      <HeaderButton radius="0px 20px 0 0" onClick={() => setPageToggle(true)}>
        Upgrades
      </HeaderButton>
    </StyledHeader>
  );
};

export default Header;
