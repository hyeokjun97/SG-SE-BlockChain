import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import Button from "@mui/material/Button";
import CoinConfig from "../config/Coin";
import { useNavigate } from "react-router-dom";
import * as userData from "../dao/data/user";

// Generate Order Data
function createData(id, name, amount) {
  return { id, name, amount };
}

const rows = [
  createData(0, "계정 1", 312.44),
  createData(1, "계정 2", 866.99),
  createData(2, "계정 1", 100.81),
  createData(3, "계정 3", 654.39),
  createData(4, "계정 4", 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function BalanceList({
  users,
  currentUser,
  onClickChange,
  onClickAdd,
}) {
  return (
    <React.Fragment>
      <Title>사용자 목록</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>사용자</TableCell>
            <TableCell align="right" onClick={onClickAdd}>
              추가
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row, index) => (
            <TableRow
              style={{
                backgroundColor:
                  row.address == currentUser.address ? "#f2f2f2" : "#fff",
              }}
              key={row.id}
            >
              <TableCell>{`Account ${index + 1}`}</TableCell>
              <TableCell align="right">
                <Button
                  onClick={() => {
                    onClickChange(row);
                  }}
                >
                  전환
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
