import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';



// Generate dumy datas
function createData(creationDate, address, amount) {
    return { creationDate, address, amount };
}

const rows = [
    createData(
        new Date(),
        'addr1',
        312.44,
    ),
    createData(
        new Date(),
        'addr 2',
        866.99,
    ),
    createData(
        new Date() ,
        'addr 43',
        100.81
    ),
    createData(
        new Date() ,
        'addr13',
        654.39,
    ),
    createData(
        new Date() ,
        'addr4',
        212.79,
    ),
];


export default function TransactionList({token}) {
    return (
        <React.Fragment>
            <Title>거래 내역 목록</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>거래일자</TableCell>
                        <TableCell>전송주소</TableCell>
                        <TableCell align="right">금액</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.creationDate.toLocaleString()}</TableCell>
                            <TableCell>{row.address}</TableCell>
                            <TableCell align="right"><b>{`${row.amount}`}</b> SYMBOL</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}
