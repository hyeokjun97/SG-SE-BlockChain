import ethTx from "ethereumjs-tx";
import * as tokenData from "../data/token";
import * as transactionData from "../data/transaction";
import * as userData from "../data/user";

export const send = (web3, cont_addr, target_addr, value) => {
  // console.log(web3);
  if (!web3.utils.isAddress(target_addr)) {
    return { data: "address가 잘못되었습니다", status: "error" };
  }
};
