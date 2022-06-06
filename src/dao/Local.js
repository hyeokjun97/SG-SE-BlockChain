

export default class Local{

    static set = (key, value) => {
        // 로컬에 키, 벨류 저장
        return localStorage.setItem(key, JSON.stringify(value));
    }

    static get = (key) => {
        let response = localStorage.getItem(key);
        if (response){
            let responseJson = JSON.parse(response);
            return responseJson;
        }else{
            return null;
        }
    }

}
