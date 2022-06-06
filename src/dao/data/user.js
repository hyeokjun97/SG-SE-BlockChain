import Local from "../Local";

const users_pool = [
  {
    address: "0xB7E2242C84A3271F7d254d079148df0d6ecb3f44",
    private_key:
      "78cc39ccb1f2d0108e40d4dcdda585abf73ff9171898c70c000a4f325cb41042",
    password: "",
    mnemonic_set:
      "tiny just august portion gold artefact hungry popular neither hood poet title",
  },
  {
    address: "0xa3d79918bf8Cc9a3b89b0e6F696C614A866297De",
    private_key:
      "3bda17e2dc2b18b2300b4cd0b858cb12f8cbd2437aea0b2938cd56022e6577c1",
    password: "",
    mnemonic_set:
      "buffalo dish same fringe buyer math network enforce clarify innocent torch unit",
  },
  {
    address: "0x3Ce8eddF676E1440C6924a8f3bB1bA23BA1EFEEc",
    private_key:
      "937cf2646eb9a9c20b13e08e5409e3c07b27bb5ad8c841d86f055f8e9a141378",
    password: "",
    mnemonic_set:
      "lumber wire bicycle stumble noodle leaf direct pave cute barely symbol license",
  },
  {
    address: "0x9691c47e91AC3ADb6CbCe126a75d6b65c90Cb499",
    private_key:
      "55d6242c0cd90bcc71d110368545f0cd8e3af5f13660cd8567514cbe96f6af94",
    password: "",
    mnemonic_set:
      "nephew oil goose cram elder decline plastic ability help family duck wasp",
  },
  {
    address: "0xED73E420e20C9B8429D50af7dB8Db914DaE6D69f",
    private_key:
      "d0e156764249717864b0da68274c8fa0dff5f2e58ce02fe50d10d1692c613694",
    password: "",
    mnemonic_set:
      "loud mobile target insect public ramp brother olive awful scrap release injury",
  },
  {
    address: "0x68D6191c90cB0C6ac5EC6C563B85E70F404C358A",
    private_key:
      "3f0e20c65c2de6a36eef36c49f2c3cfe749e70f27b508561d0a9ad2dc0597a64",
    password: "",
    mnemonic_set:
      "surge penalty gospel shrug wide bag broom again fashion absent scorpion resist",
  },
  {
    address: "0xe89B8c48F0Ef4E9d43eD7AcAAEC72E0d68433c51",
    private_key:
      "540d31d3ea954a1e5901e5800a4d9d87dee62b1a42bcfbc12850bf1d2cc36ea5",
    password: "",
    mnemonic_set:
      "pause during trouble athlete unfold alarm fire joke clump salt myth jazz",
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
    return {
      data: ret_user.find((user) => user.address === addr),
      status: true,
    };
  } else {
    return { data: "get user by addr error", status: false };
  }
};
