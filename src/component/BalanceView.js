import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
    event.preventDefault();
}

export default function BalanceView({balance, userName}) {
    return (
        <React.Fragment>
            <Title>현재 잔고</Title>
            <Typography component="p" variant="h4">
                {balance} SYC
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                {
                    new Date().toLocaleString()
                }
            </Typography>
            <div>
                <Title>
                    {userName}
                </Title>
            </div>
        </React.Fragment>
    );
}
