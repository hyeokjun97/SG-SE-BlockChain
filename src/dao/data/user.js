import Local from "../Local";

const users_pool = [
  {
    address: "0x307406876e70F5ebcf92f7d4Cb97D1Fb6892EAA5",
    private_key:
      "b8e0be85fb3e7bd05657597c96fbb87df5ff7997f18ae37332728a5fc0552a13",
    password: "",
    mnemonic_set:
      "tiny just august portion gold artefact hungry popular neither hood poet title",
  },
  {
    address: "0x6717D5B991Bf3b29c97848598dbd5d45348425C4",
    private_key:
      "e80f41e51d1cf493e06ab4fc3729578bd0d45ec2a2c45722303551d465760d3f",
    password: "",
    mnemonic_set:
      "buffalo dish same fringe buyer math network enforce clarify innocent torch unit",
  },
  {
    address: "0x0065d1BC9c0010521cB6658b72FC2B7C373d6eba",
    private_key:
      "62f9816e5e4236074b2aa8c48313e888f2ae6036cd1164477aba223d8fa85b08",
    password: "",
    mnemonic_set:
      "lumber wire bicycle stumble noodle leaf direct pave cute barely symbol license",
  },
  {
    address: "0x36DFFDc684D377bf6dd455Bd2797c8045f81E747",
    private_key:
      "7bba00fbfbb742062dc110099504d27beec223f58a2de49a2385a709451bb36a",
    password: "",
    mnemonic_set:
      "nephew oil goose cram elder decline plastic ability help family duck wasp",
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
  const data = Local.get("user");
  const user_pool = Local.get("user_pool");
  console.log(data);
  if (data.length < 4) {
    return { data: user_pool[data.length + 1], status: true };
  }
  return { data: "make user error", status: false };
};

// address정보를 이용하여 유저를 가져온다.
export const getByAddr = (addr) => {
  const ret_user = getAll();
  if (ret_user) {
    return {
      data: ret_user.find((user) => user.address === addr),
      status: true,
    };
  } else {
    return { data: "get user by addr error", status: false };
  }
};

// 현재 로그인 한 유저 가져오기
export const getCurrentUser = () => {
  const user = Local.get("current_user");
  if (user) {
    return { data: user, status: true };
  } else {
    return { data: "로그인된 유저가 없습니다.", status: false };
  }
};

// 로그인시 현재 로그인한 유저 정보를 저장한다.
export const postCurrentUser = (user) => {
  Local.set("current_user", user);
  return { data: user, status: true };
};

export const getByPass = (pass) => {
  const ret_user = getAll();
  if (ret_user) {
    return {
      data: ret_user.find((user) => user.password === pass),
      status: true,
    };
  } else {
    return { data: "get user by addr error", status: false };
  }
};
