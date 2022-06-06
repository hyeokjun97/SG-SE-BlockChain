import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import {Box} from "@mui/material";

function preventDefault(event) {
    event.preventDefault();
}

export default function BalanceView() {

    const getBalance = () => {
        return 1131.34
    }

    const getSymbol = () => {
        return 'syc'.toUpperCase()
    }

    const getUserName = () => {
        return 'USER_NAME'
    }

    const getBalancesByToken = () => {
        return [{
            token: '',
            symbol: 'SYC',
            balance: 1411.1,
        }, {
            token: '',
            symbol: 'ETC',
            balance: 411.1,
        }, {
            token: '',
            symbol: 'BTC',
            balance: 6111.1,
        }];
    }

    return (
        <React.Fragment>

                <Title>토큰별 현재 잔고</Title>
                {
                    getBalancesByToken().map(info=>{
                        return <>
                        <Typography component="p" variant="h7">
                            {info.symbol}
                        </Typography>
                            <Typography component="p" variant="h5">
                                <b>{info.balance}</b> {info.symbol} <hr></hr>
                        </Typography>

                        </>
                    })
                }

                <Typography color="text.secondary" sx={{ flex: 1 }}>
                    {
                        new Date().toLocaleString()
                    }
                </Typography>

        </React.Fragment>
    );
}
