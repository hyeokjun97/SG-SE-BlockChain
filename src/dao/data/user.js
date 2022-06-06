import Local from "../Local";

const users_pool = [
  {
    address: "",
    private_key: "",
    password: "",
    mnemonic_set: "",
  },
];

export const InitUserPool = () => {
  Local.set("user_pool", users_pool);
};

// 유저를 추가한다.
export const add = (item) => {
  const user = Local.get("user");
  if (user) {
    user.push(item);
    Local.set("user", user);
    return { message: "success", status: true };
  } else {
    return { message: "failed", status: false };
  }
};

// 등록되어있는 모든 유저를 가져온다.
export const getAll = () => {
  const response = Local.get("user");
  if (response) {
    return { data: response, status: true };
  } else {
    return { data: [], status: false };
  }
};

// 노드 풀에서 다음 node를 가져온다
export const getRemainNode = () => {
  const { data } = Local.get("user");
  const user_pool = Local.get("user_pool");
  if (data.length < 7) {
    return { data: user_pool[data.length + 1], status: true };
  }
  return { data: "make user error", status: false };
};

// address정보를 이용하여 유저를 가져온다.
export const getByAddr = (addr) => {
  const ret_user = getAll();
  if (ret_user) {
    return ret_user.find((user) => user.address === addr);
  } else {
    return null;
  }
};
