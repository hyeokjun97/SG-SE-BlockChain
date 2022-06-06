import Local from "./Local";
import * as sendController from "./controller/send";
import { web3 } from "./helper/web3Helper";

export default class SendCoinAPI {
  static instance = new SendCoinAPI();
  // 싱글톤 객체로 밖에서는 SendCoinAPI.instance.<member_method_name>(...) 으로 콜하세요.

  //   ... 구현 필요한 항목들.
  //     4) Usecase: 코인 전송: 이태화
  // - 보내려는 금액보다 잔액이 부족할때
  // - 내가 가지고 있는 통화가 여러개여서 그중 하나를 선택
  // - 수신자 정보가 유효하지 않을시 취소
  // - 네트워크와 연결되있지 않다면
  // -로컬에 로그를 추가
  //

  sendCoin(cont_addr, target_addr, value) {
    sendController.send(web3, cont_addr, target_addr, value);
  }
}
