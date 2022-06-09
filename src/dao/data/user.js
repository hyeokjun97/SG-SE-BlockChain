import Local from "../Local";

const users_pool = [
  // {
  //   address: "0x307406876e70F5ebcf92f7d4Cb97D1Fb6892EAA5",
  //   private_key:
  //     "b8e0be85fb3e7bd05657597c96fbb87df5ff7997f18ae37332728a5fc0552a13",
  //   password: "",
  //   mnemonic_set:
  //     "tiny just august portion gold artefact hungry popular neither hood poet title",
  // },
  // {
  //   address: "0x6717D5B991Bf3b29c97848598dbd5d45348425C4",
  //   private_key:
  //     "e80f41e51d1cf493e06ab4fc3729578bd0d45ec2a2c45722303551d465760d3f",
  //   password: "",
  //   mnemonic_set:
  //     "buffalo dish same fringe buyer math network enforce clarify innocent torch unit",
  // },
  // {
  //   address: "0x0065d1BC9c0010521cB6658b72FC2B7C373d6eba",
  //   private_key:
  //     "62f9816e5e4236074b2aa8c48313e888f2ae6036cd1164477aba223d8fa85b08",
  //   password: "",
  //   mnemonic_set:
  //     "lumber wire bicycle stumble noodle leaf direct pave cute barely symbol license",
  // },
  // {
  //   address: "0x36DFFDc684D377bf6dd455Bd2797c8045f81E747",
  //   private_key:
  //     "7bba00fbfbb742062dc110099504d27beec223f58a2de49a2385a709451bb36a",
  //   password: "",
  //   mnemonic_set:
  //     "nephew oil goose cram elder decline plastic ability help family duck wasp",
  // },
  //
  {
    address: "0x5FFA863a230A80642e4a31f535606E7a67E4C5fb",
    private_key:
      "d8ca706459c90dd7400792303bffc76485343d1a34497b8bddf5628387db1500",
    password: "",
    mnemonic_set:
      "tiny just august portion gold artefact hungry popular neither hood poet title",
  },
  {
    address: "0x051F9e64101B696b4FB13aB4506A5Ce7e9D91866",
    private_key:
      "4a7c1fce0cf65c660a26f79f269b2eb6bc658fbbc9fdb535aba316bfcc4bc1dc",
    password: "",
    mnemonic_set:
      "buffalo dish same fringe buyer math network enforce clarify innocent torch unit",
  },
  {//
    address: "0xE0a46A595f250D6bBc1596764c845C394b0b2555",
    private_key:
      "99cfc00099cb25eff411f6433e6cab2c2ce0a3a025617258bb3b53ee905d6877",
    password: "",
    mnemonic_set:
    "lumber wire bicycle stumble noodle leaf direct pave cute barely symbol license",
  },
  {
    address: "0x6e88E1FC49f7e1cB3D4885143E3f47ACFd6687a2",
    private_key:
      "0504e5e77627afa6e5cd1c68ae7a6331e0fe6bb0c710881f7581f62af962103e",
    password: "",
    mnemonic_set:
    "nephew oil goose cram elder decline plastic ability help family duck wasp",
  },
  {
    address: "0xC1460c29D4718C3112a1FAf13DaD1B1138651Ef2",
    private_key:
      "116e8133467b5e999bf6e86ccf38618bf055f78e0a2daf7faeef84f0fef0bac8",
    password: "",
    mnemonic_set:
      "science share exotic snap mother artefact silk deposit achieve local dizzy mesh",
  },
  {
    address: "0x79ca958f94D16BaDEbfe2C3DE3c51eCbB2C5dB94",
    private_key:
      "43c140429db3b290ef058aa9bffa29a8f0f0ef92292a2dbd9bac1565f728a264",
    password: "",
    mnemonic_set:
      "because feature left describe blast age kiwi window ostrich limb nut wrist",
  },
  {
    address: "0x02841B235d665E100151b99cDBa31C0E47cA8d60",
    private_key:
      "ec6e3f39576679226de89624ff58154dcfa69dc0841042c0c8d3cff83432ffc8",
    password: "",
    mnemonic_set:
      "worry dentist romance simple acid tree obvious vacuum double false lobster sword",
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
    return { data: user_pool[data.length], status: true };
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
