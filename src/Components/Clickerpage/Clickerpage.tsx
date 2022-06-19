import React, { FC } from "react";
import IncreaseClickValuePanel from "../IncreaseClickValuePanel/IncreaseClickValuePanel";
import { IUpgradeInfo } from "../../App";

import { RedButton, ClickerScreen } from "./../Styles/ClickerPage.styled";

interface IClickerPageProps {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  clickInfo: IUpgradeInfo;
  idleInfo: IUpgradeInfo;
  setIdleInfo: React.Dispatch<React.SetStateAction<IUpgradeInfo>>;
  setClickInfo: React.Dispatch<React.SetStateAction<IUpgradeInfo>>;
}
const Clickerpage: FC<IClickerPageProps> = ({
  counter,
  setCounter,
  clickInfo,
  idleInfo,
  setIdleInfo,
  setClickInfo,
}) => {
  return (
    <ClickerScreen>
      <RedButton
        onClick={() => setCounter((prev) => prev + clickInfo.damage)}
      />
      <h1>{counter}</h1>
      <h4>{`Click:${clickInfo.damage} | Idle:${idleInfo.damage}`}</h4>
      <IncreaseClickValuePanel
        setIdleInfo={setIdleInfo}
        idleInfo={idleInfo}
        setClickInfo={setClickInfo}
        clickInfo={clickInfo}
        counter={counter}
        setCounter={setCounter}
      />
    </ClickerScreen>
  );
};

export default Clickerpage;
