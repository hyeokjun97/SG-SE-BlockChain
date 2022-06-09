import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
// import QueryCoinTransactionAPI from "../dao/QueryCoinTransactionAPI.js";
import * as transactionData from "../dao/data/transaction";
import moment from "moment";

export default function TransactionList({ token }) {
  const [myTransactions, setMyTransactions] = React.useState([]);

  console.log("Transactions ", token);

  const userAddr = token.user_addr;
  const cont_addr = token.cont_addr;
  let symbol = token.token_symbol;
  //console.log("Transactions ID ", userAddr);
  console.log("Transactions CA", symbol);

  const getTransactionList = async () => {
    const { data } = transactionData.getByUserContAddr(userAddr, cont_addr);
    console.log(data);
    setMyTransactions(data);
  };

  React.useEffect(() => {
    getTransactionList();
  }, [token]);

  return (
    <React.Fragment>
      <Title>거래 내역 목록</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>거래일자</TableCell>
            <TableCell style={{ minWidth: 80 }}>타입</TableCell>
            <TableCell>보낸사람</TableCell>
            <TableCell>받는사람</TableCell>
            <TableCell align="right">금액</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myTransactions.map((row) => (
            <TableRow key={row.hash}>
              <TableCell style={{ minWidth: 120 }}>
                {moment(row.date).format("YYYY-MM-DD hh:mm")}
              </TableCell>
              <TableCell
                style={{
                  minWidth: 80,
                  color: row.sender == userAddr ? "#f00" : "#0d1",
                }}
              >
                {row.sender == userAddr ? "전송" : "수신"}
              </TableCell>
              <TableCell>{row.receiver}</TableCell>
              <TableCell>{row.sender}</TableCell>
              <TableCell align="right">
                <b>{`${row.sender == userAddr ? "-" : ""}${
                  parseFloat(row.sent_amount) / Math.pow(10, 10)
                }`}</b>{" "}
                {symbol}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
