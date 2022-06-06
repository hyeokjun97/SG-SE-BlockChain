export default class Local {
  static set = (key, value) => {
    // 로컬에 키, 벨류 저장
    return localStorage.setItem(key, JSON.stringify(value));
  };

  static get = (key, defaultValue=null) => {
    let response = localStorage.getItem(key);
    if (response) {
      try {
        let responseJson = JSON.parse(response);
        return responseJson;
      } catch (e) {
        console.log("Local get error", e);
      }
    } else {
      return defaultValue;
    }
  };
}
