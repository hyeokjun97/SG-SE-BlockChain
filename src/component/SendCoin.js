import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SendCoinAPI from "../dao/SendCoinAPI.js";
import QueryCoinAPI from "../dao/QueryCoinAPI.js";
import * as tokenData from "../dao/data/token";
import * as userData from "../dao/data/user";
import { web3 } from "../dao/helper/web3Helper";

function preventDefault(event) {
  event.preventDefault();
}

export default function SendCoin({ onSend }) {
  const [token, setToken] = React.useState("syc");
  const [address, setAddress] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [tokenList, setTokenList] = React.useState([]);
  const [curUser, setCurUser] = React.useState();
  let node1Address = "";

  const getTokenList = () => {
    const user = userData.getCurrentUser();
    const tokens = tokenData.getByUserAddr(user.data.address);
    console.log("SendCoint JS Token: ", tokens);
    setTokenList(tokens.data);
    if (tokens.data.length > 0) {
      setToken(tokens.data[0]);
    }
    setCurUser(user.data);
  };

  const sendCoin = async () => {
    //TODO 실제 전송
    // alert('little sendcoin');

    // console.log(web3.utils.isAddress("asdf"));
    if (address.length == 0) {
      return alert("주소를 적어주세요.");
    }
    if (amount.length == 0) {
      return alert("수량을 적어주세요");
    }

    const balance = await QueryCoinAPI.instance.getBalance(
      curUser.address,
      token.cont_addr
    );



    if (balance < parseInt(amount)) {
      return alert("가지고 있는 토큰보다 많습니다.");
    }
    window.showBusy();

    const result = await SendCoinAPI.instance.sendCoin(
      token.cont_addr,
      address,
      parseFloat(amount) //만약 소수점까지 보내야할때 이부분을 10^-10자리수 까지 보내야함. 나중에 수정 필요
      //수정 완료.
    );
    // console.log("DEBUG SendCoin:", amount);
    if (result.status == 200) {
      alert(result.data);
      window.location.reload();
    }
    if (result.status == 404 || result.status == 400 || result.status == 500) {
      alert(result.data);
    }
    setAddress("");
    setAmount("");
    // onSend(token, address, amount);
  };

  React.useEffect(() => {
    getTokenList();
  }, []);

  return (
    <React.Fragment>
      <Title>코인 전송</Title>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Token</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="token"
          label="Token"
          value={token}
          onChange={(event) => {
            setToken(event.target.value);
          }}
        >
          {tokenList.map((e) => {
            return <MenuItem value={e}>{e.token_name}</MenuItem>;
          })}
        </Select>
      </FormControl>

      <TextField
        margin="normal"
        required
        fullWidth
        // name="target_address"
        label="주소 (Address)"
        type="text"
        // id="target_address"
        // autoComplete="target_address"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />

      <TextField
        margin="normal"
        required
        fullWidth
        name="amount"
        label={`수량 (Amount/${token.token_symbol})`}
        type="number"
        id="amount"
        // autoComplete="amount"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => {
          sendCoin();
        }}
      >
        코인 전송
      </Button>
    </React.Fragment>
  );
}
