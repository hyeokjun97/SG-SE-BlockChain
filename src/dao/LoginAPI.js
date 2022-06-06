import Local from "./Local";


export default class LoginAPI {

    static instance = new LoginAPI();
    // 싱글톤 객체로 밖에서는 CoinAPI.instance.<member_method_name>(...) 으로 콜하세요.

    login = (address, private_key) => {
        // TODO web3로 로그인 후에, 로그인 관련 정보를 로컬 스토리지에 저장하세요.
        Local.set('logged_in', true); // 예시입니다.
    }

    logout = () => {
        // 로그인 관련 정보 제거
    }

//
//     7) Usecase: 로그인 페이지( 계정 등록): 이인재
// - 계정 생성 (API를 이용하여 확장 가능)
// - 계정

}
