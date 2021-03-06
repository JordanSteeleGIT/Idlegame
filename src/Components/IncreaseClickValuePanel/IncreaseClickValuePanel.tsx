import React, { FC, useEffect, useState } from "react";
import { IUpgradeInfo } from "../../App";

import PanelButtons from "./PanelButtons";
import {
  ClickPanelStyles,
  UpgradeButtonStyled,
  ButtonsContainer,
} from "./../Styles/IncreaseClickPanel.styled";

interface IIncreaseValuesProps {
  setClickInfo: React.Dispatch<React.SetStateAction<IUpgradeInfo>>;
  setIdleInfo: React.Dispatch<React.SetStateAction<IUpgradeInfo>>;
  counter: number;
  clickInfo: IUpgradeInfo;
  idleInfo: IUpgradeInfo;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}
const IncreaseClickValuePanel: FC<IIncreaseValuesProps> = ({
  setClickInfo,
  setIdleInfo,
  counter,
  clickInfo,
  idleInfo,
  setCounter,
}) => {
  const handleIncreaseClick = (): void => {
    if (counter >= clickInfo.cost) {
      setClickInfo((prev) => ({
        damage: Math.round(prev.damage + 1 * prev.amount * 0.5),
        amount: prev.amount + 1,
        cost: Math.round(prev.damage + 2 * (prev.amount * 3)),
      }));

      setCounter(counter - clickInfo.cost);
    }
  };
  const handleIncreaseIdle = (): void => {
    if (counter >= idleInfo.cost) {
      setIdleInfo((prev) => ({
        damage: Math.round(prev.damage + 1 * prev.amount * 0.5),
        amount: prev.amount + 1,
        cost: Math.round(prev.damage + 2 * (prev.amount * 3)),
      }));

      setCounter(counter - idleInfo.cost);
    }
  };

  return (
    <ClickPanelStyles>
      <ButtonsContainer>
        <PanelButtons
          counter={counter}
          buttonData={clickInfo}
          setClickInfo={setClickInfo}
          handleButtonEvent={handleIncreaseClick}
          buttonLabel="Increase Click"
        />
        <PanelButtons
          counter={counter}
          buttonData={idleInfo}
          setClickInfo={setIdleInfo}
          handleButtonEvent={handleIncreaseIdle}
          buttonLabel="Increase Idle"
        />
      </ButtonsContainer>
    </ClickPanelStyles>
  );
};

export default IncreaseClickValuePanel;
