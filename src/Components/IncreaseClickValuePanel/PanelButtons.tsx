import React, { FC, useState, useEffect } from "react";
import {
  UpgradeButtonStyled,
  ButtonExtraData,
} from "./../Styles/IncreaseClickPanel.styled";
import { IUpgradeInfo } from "../../App";

interface IIncreaseValuesProps {
  setClickInfo: React.Dispatch<React.SetStateAction<IUpgradeInfo>>;
  counter: number;
  buttonData: IUpgradeInfo;
  handleButtonEvent: any;
  buttonLabel: string;
}

const PanelButtons: FC<IIncreaseValuesProps> = ({
  counter,
  buttonData,
  handleButtonEvent,
  buttonLabel,
}) => {
  const [hoveredInfo, setHoveredInfo] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClicked(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [clicked]);
  return (
    <div>
      <UpgradeButtonStyled
        primaryColor={counter < buttonData.cost ? "#E84C4C" : "#287ca3"}
        secondaryColor={counter < buttonData.cost ? "#da3333" : "#1b6a8f"}
        bigger={counter < buttonData.cost ? true : false}
        clicked={clicked}
        onClick={() => {
          handleButtonEvent();
          setClicked(true);
        }}
        onMouseOver={() => setHoveredInfo(true)}
        onMouseOut={() => setHoveredInfo(false)}
      >
        {buttonLabel}
      </UpgradeButtonStyled>
      {hoveredInfo ? (
        <ButtonExtraData>
          <ul>
            <li>Cost:{buttonData.cost}</li>
            <li>Damage:{buttonData.damage}</li>
            <li> Amount:{buttonData.amount}</li>
          </ul>
        </ButtonExtraData>
      ) : null}
    </div>
  );
};

export default PanelButtons;
