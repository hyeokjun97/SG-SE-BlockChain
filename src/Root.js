import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./layout/LoginPage";
import EntryPage from "./layout/EntryPage";
import * as tokenData from "./dao/data/token";
import * as transactionData from "./dao/data/transaction";
import * as userData from "./dao/data/user";
import Local from "./dao/Local";

const Root = () => {
  const initALlData = () => {
    // init all data
    const init = [];
    const tokens = tokenData.get();
    const transactions = transactionData.get();
    if (!tokens.status) {
      Local.set("token", JSON.stringify(init));
    }
    if (!transactions.status) {
      Local.set("transaction", JSON.stringify(init));
    }
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
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
