import Local from "./Local";
import * as loginController from "./controller/login";
import { web3 } from "./helper/web3Helper";

export default class LoginAPI {
  static instance = new LoginAPI();
  // 싱글톤 객체로 밖에서는 CoinAPI.instance.<member_method_name>(...) 으로 콜하세요.

  // 저장되어있는 모든 account를 가져온다.
  getAllAccounts() {
    return loginController.getAllAccounts();
  }

  // 로그인 요청을 한다
  login(password, mnemonic_set) {
    // TODO: password와 mnemonic_set을 이용해서 로그인 요청을 한다.
    // 그 후 가져온 user의 정보를 localstorage에 저장
  }

  //
  //     7) Usecase: 로그인 페이지( 계정 등록): 이인재
  // - 계정 생성 (API를 이용하여 확장 가능)
  // - 계정
}
