import ethTx from "ethereumjs-tx";
import * as tokenData from "../data/token";
import * as transactionData from "../data/transaction";
import * as userData from "../data/user";

export const getAll = (web3, cont_addr) => {
  //   console.log(props.web3);
  const response = transactionData.getByContractAddr(cont_addr);
};

export const getDetail = (web3, hash) => {
  //   console.log(props.web3);
  //  TODO:  hash를 이용해 web3를 통해 거래 상세 정보를 가져온다.
};
