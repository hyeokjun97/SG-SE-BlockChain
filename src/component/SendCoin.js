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
import * as tokenData from "../dao/data/token";
import * as userData from "../dao/data/user";

function preventDefault(event) {
  event.preventDefault();
}

export default function SendCoin({ onSend }) {
  const [token, setToken] = React.useState("syc");
  const [address, setAddress] = React.useState(null);
  const [amount, setAmount] = React.useState(null);
  const [tokenList, setTokenList] = React.useState([]);
  let node1Address = "";

  const getTokenList = () => {
    const user = userData.getCurrentUser();
    const tokens = tokenData.getByUserAddr(user.data.address);
    console.log("asdfasdf", tokens);
    setTokenList(tokens.data);
  };

  const sendCoin = async () => {
    //TODO 실제 전송
    // alert('little sendcoin');
    await SendCoinAPI.instance.sendCoin(
      token.cont_addr,
      address,
      parseInt(amount)
    );

    onSend(token, address, amount);
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
        name="target_address"
        label="주소 (Address)"
        type="text"
        id="target_address"
        autoComplete="target_address"
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />

      <TextField
        margin="normal"
        required
        fullWidth
        name="amount"
        label={`수량 (Amount/${token.token_symbol})})`}
        type="number"
        id="amount"
        autoComplete="amount"
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
