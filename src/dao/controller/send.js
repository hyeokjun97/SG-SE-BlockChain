import ethTx from "ethereumjs-tx";
import * as tokenData from "../data/token";
import * as transactionData from "../data/transaction";
import * as userData from "../data/user";
import { ABI } from "../helper/web3Helper";
import TransactionList from "../../component/TransactionList.js";

export const getAll = (web3) => {
  console.log(web3);
};

export const send = async (web3, cont_addr, target_addr, value) => {
  var contract = new web3.eth.Contract(ABI, cont_addr);
  var set_contract = contract.methods.transfer(target_addr, value);

  var set_contract_byte = set_contract.encodeABI();

  if (!web3.utils.isAddress(target_addr)) {
    return { data: "address가 잘못되었습니다", status: 404 };
  }
  const balance = await contract.methods.balanceOf(target_addr);
  if (balance < value) {
    return { data: "자산이 부족합니다", status: 400 };
  }

  web3.eth.getTransactionCount(target_addr, "pending", (err, nonce) => {
    if (err) {
      return;
    }
    const allTransaction = transactionData.get();
    console.log(nonce);
    var Raw_Tx = {
      nonce: web3.utils.toHex(nonce + allTransaction.data.length + 4),
      gasPrice: web3.utils.toHex(1000),
      gasLimit: web3.utils.toHex(3000000),
      data: set_contract_byte,
      from: target_addr,
      to: cont_addr,
    };

    // priv_key 가져와야
    const me = userData.getCurrentUser();
    const userPrivKey = Buffer.from(me.data.private_key, "hex");
    console.log(me);
    var Signature = new Buffer.from(userPrivKey, "hex");

    var Make_Tx = new ethTx(Raw_Tx);
    Make_Tx.sign(Signature);

    var Serialized_Tx = Make_Tx.serialize();
    var Raw_Tx_Hex = "0x" + Serialized_Tx.toString("hex");

    web3.eth.sendSignedTransaction(Raw_Tx_Hex).on("receipt", (receipt) => {
      console.log("receipt : ", receipt, cont_addr);
      transactionData.add({
        hash: receipt.transactionHash,
        cont_addr: cont_addr,
      });
    });
  });
};
