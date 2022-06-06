import ethTx from "ethereumjs-tx";
import Local from "../Local";
import * as tokenData from "../data/token";
import * as transactionData from "../data/transaction";
import * as userData from "../data/user";

export const login = (pass, mneminic_set) => {
    const loginAccount=userData.getByPass(pass);
    if(mneminic_set==loginAccount.mneminic_set){
      return true;
    }
    else return false;
};

export const logout = (web3) => {
  // console.log(web3);
};

export const getAllAccounts = () => {
  return userData.getAll();
};

export const makeAccount= (pass)=>{
  
  const remain=userData.getRemainNode;
  remain.password=pass;
  userData.add(remain);
  console.log(remain.password);
  return remain;
}


