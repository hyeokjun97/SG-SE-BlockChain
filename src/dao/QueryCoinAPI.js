import Local from "./Local";
import * as coinController from "./controller/coin";
import { web3 } from "./helper/web3Helper";

export default class QueryCoinAPI {
  static instance = new QueryCoinAPI();
  // 싱글톤 객체로 밖에서는 QueryCoinAPI.instance.<member_method_name>(...) 으로 콜하세요.

  //     5) Usecase: 코인 가지고 있는 거조회 (토큰 추가==발행) :권기윤
  // - 다양한 통화를 한번에 화면에 출력
  // - 토큰 추가시 잘못된 주소면 에러 출력
  // - 토큰 추가시 통화를 개인 디비에 저장
  //

  getCoinList() {
    // TODO: 여기서 모든 코인을 가지고 올 수 있게 만든다. *유저의 모든 코인을
    return coinController.getAll(web3);
    //
  }

  getBalance (address, contract_address) {
 
    return coinController.getBalance(web3,address, contract_address);
  }

  deployToken(name, symbol, total_supply) {
    // TODO: 여기서 코인을 deploy하는 로직을 만든다.
    coinController.deploy(web3, name, symbol, total_supply);
  }

  addCustomToken(customTokenAddress){
    return coinController.addCustomTokenAddress(customTokenAddress);
  }
}
