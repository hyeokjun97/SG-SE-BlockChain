import Local from "../Local";

// dataTyoe
const transaction = [{ hash: "", cont_addr: "" }];

export const add = (item) => {
  const ret_transaction = Local.get("transaction");
  if (ret_transaction) {
    ret_transaction.push(item);
    Local.set("transaction", ret_transaction);
    return { data: "success", status: true };
  } else {
    return { data: "failed", status: false };
  }
};
export const remove = () => {};
export const get = () => {
  const response = Local.get("transaction");
  if (response) {
    return { data: response, status: true };
  } else {
    return { data: [], status: true };
  }
};
export const getByContractAddr = (cont_addr) => {
  const response = Local.get("transaction");
  if (response) {
    return {
      data: response.filter(
        (transaction) => transaction.cont_addr === cont_addr
      ),
      status: true,
    };
  } else {
    return { data: {}, status: false };
  }
};
