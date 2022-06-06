import Local from "./Local";
import * as TransController from "./controller/transaction";
import { web3 } from "./helper/web3Helper";

export default class QueryCoinTransactionAPI {
  static instance = new QueryCoinTransactionAPI();
  // 싱글톤 객체로 밖에서는 QueryCoinTransactionAPI.instance.<member_method_name>(...) 으로 콜하세요.

  // 4) Transaction(Activity) 페이지
  // 		+전송, 메인로 가는 버튼
  // 		+거래내역 (간소화)
  // 		+각 거래내역당 Detail 정보
  // 		(->) 메인, 전송, 토큰추가
  //   6) Usecase: 코인 트랜잭션 조회: 이해욱
  // 		- 메타마스크 참조
  // 		- 유저별 로그를 통해서 조회 결과 출력

  getCoinTransactionList(cont_addr) {
    // Transaction List를 hash를 이용하여 조회한다.
    TransController.getAll(web3, cont_addr);
  }

  getCoinTransactionDetail(hash) {
    // Transaction Detail을 hash를 이용하여 조회한다.
    TransController.getDetail(web3, hash);
  }
}
