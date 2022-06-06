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

const Root = () => {
  const initALlData = () => {
    // init all data
    const init = [];
    const tokens = tokenData.get();
    const transactions = transactionData.get();
    const user = userData.getAll();
    if (!tokens.status || typeof tokens.data != "object") {
      Local.set("token", init);
    }
    if (!transactions.status || typeof tokens.data != "object") {
      Local.set("transaction", init);
    }
    if (!user.status || typeof tokens.data != "object") {
      Local.set("user", init);
    }
    console.log(tokenData.get());
    userData.InitUserPool();
  };

  React.useEffect(() => {
    initALlData();
  }, []);

  return (
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
  );
};

export default Root;
