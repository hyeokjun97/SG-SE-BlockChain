import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./layout/LoginPage";
import EntryPage from "./layout/EntryPage";
import * as tokenData from "./dao/data/token";
import * as transactionData from "./dao/data/transaction";
import * as userData from "./dao/data/user";
import Local from "./dao/Local";
import MainPage from "./layout/MainPage";
import CoinPage from "./layout/CoinPage";
import TransactionPage from "./layout/TransactionPage";
import TokenPage from "./layout/TokenPage";
import Loader from "./component/Loader";

const Root = () => {
  const [isBusy, setIsBusy] = React.useState(false);

  const justInit = () => {
    const init = [];
    Local.set("token", init);
    Local.set("transaction", init);
    Local.set("user", init);
    Local.set("current_user", init);
  };
  const initALlData = () => {
    // init all data
    const init = [];
    const tokens = tokenData.get();
    const transactions = transactionData.get();
    const user = userData.getAll();
    // justInit();
    if (!tokens.status || typeof tokens.data != "object") {
      Local.set("token", init);
    }
    if (!transactions.status || typeof transactions.data != "object") {
      Local.set("transaction", init);
    }
    if (!user.status || typeof user.data != "object") {
      Local.set("user", init);
    }
    console.log(tokenData.get());
    userData.InitUserPool();
  };

  React.useEffect(() => {
    initALlData();
  }, []);

  window.showBusy = function (delay = 2000) {
    setIsBusy(true);
    setTimeout(() => {
      setIsBusy(false);
    }, delay);
  };

  return (
    <>
      {isBusy ? <Loader isBusy={isBusy} /> : null}
      <div
        style={{
          transition: "opacity 500ms",
          opacity: isBusy ? 0 : 1,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<EntryPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="main" element={<MainPage />} />
            <Route path="coin" element={<CoinPage />} />
            <Route path="transactions" element={<TransactionPage />} />
            <Route path="token" element={<TokenPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default Root;
