import ethTx from "ethereumjs-tx";
import Local from "../Local";
import * as tokenData from "../data/token";
import * as transactionData from "../data/transaction";
import * as userData from "../data/user";

export const login = (password, mneminic_set) => {
  // console.log(web3);
};

export const logout = (web3) => {
  // console.log(web3);
};

export const getAllAccounts = () => {
  return userData.getAll();
};
