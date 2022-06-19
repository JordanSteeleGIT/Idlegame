import React, { FC } from "react";
import IncreaseClickValuePanel from "../IncreaseClickValuePanel/IncreaseClickValuePanel";
import { IClickInfo } from "../../App";
import { IIdleInfo } from "../../App";
import { RedButton, ClickerScreen } from "./../Styles/ClickerPage.styled";

interface IClickerPageProps {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  clickInfo: IClickInfo;
  idleInfo: IIdleInfo;
  setIdleInfo: React.Dispatch<React.SetStateAction<IIdleInfo>>;
  setClickInfo: React.Dispatch<React.SetStateAction<IClickInfo>>;
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
