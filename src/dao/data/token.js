import Local from "../Local";

const token = [{ cont_addr: "", user_addr: "" }];

// token 정보를 추가한다.
export const add = (item) => {
  const ret_token = Local.get("token");
  if (ret_token) {
    ret_token.push(item);
    Local.set("token", ret_token);
    return { message: "success", status: true };
  } else {
    return { message: "failed", status: false };
  }
};
export const remove = () => {};

// token 리스트를 모두 가져온다.
export const get = () => {
  const response = Local.get("token");
  if (response) {
    return { data: response, status: true };
  } else {
    return { data: "get token failed", status: false };
  }
};

// 유저가 등록한 token을 모두 가져온다.
export const getByUserAddr = (user_addr) => {
  const response = Local.get("token");
  if (response) {
    return {
      data: response.find((token) => token.user_addr === user_addr),
      status: true,
    };
  }
  return { data: "get token by id failed", status: false };
};
