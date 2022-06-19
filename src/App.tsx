import React, { FC, useState } from "react";
import useInterval from "@use-it/interval";
import Clickerpage from "./Components/Clickerpage/Clickerpage";
import Header from "./Components/Header/Header";
import Upgradepage from "./Components/Upgradespage/Upgradepage";
import { GlobalStyles } from "./Components/Styles/Global";
import { AppContainer } from "./Components/Styles/ContentContainer.styled";

export interface IUpgradeInfo {
  damage: number;
  cost: number;
  amount: number;
}

const App: FC = () => {
  const [pageToggle, setPageToggle] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);
  const [clickInfo, setClickInfo] = useState<IUpgradeInfo>({
    damage: 1,
    cost: 1,
    amount: 1,
  });
  const [idleInfo, setIdleInfo] = useState<IUpgradeInfo>({
    damage: 0,
    cost: 1,
    amount: 0,
  });

  useInterval(() => {
    if (clickInfo.amount > 0) {
      setCounter((currentCount) => currentCount + idleInfo.damage);
    }
  }, 1000);

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Header setPageToggle={setPageToggle} />
        {pageToggle === false ? (
          <Clickerpage
            counter={counter}
            setCounter={setCounter}
            clickInfo={clickInfo}
            setClickInfo={setClickInfo}
            idleInfo={idleInfo}
            setIdleInfo={setIdleInfo}
          />
        ) : (
          <Upgradepage />
        )}
      </AppContainer>
    </>
  );
};

export default App;
