import ethTx from "ethereumjs-tx";
import * as tokenData from "../data/token";
import * as transactionData from "../data/transaction";
import * as userData from "../data/user";
import { ABI } from "../helper/web3Helper";

export const getAll = (web3) => {
  console.log(web3);
};

export const deploy = (web3, name, symbol, total_supply) => {
  // console.log(web3)
};

export const getBalance = async (web3,address)=>{
  var contract_address = "0x532eF26fCeDA9D28644db9558D355e2E37509EFE";
  var contract = new web3.eth.Contract(ABI, contract_address);
  const data = await contract.methods.balanceOf(address).call()
  var decimal = Math.pow(10, 1)
  var new_data = data / decimal
  console.log(new_data);
  return "balance = " + new_data
  // .then(data => {
  //     var decimal = Math.pow(10, 1)
  //     var new_data = data / decimal
  //     console.log(new_data);
  //     // res.send("balance = " + new_data)
  //     return "balance = " + new_data
  // })
}