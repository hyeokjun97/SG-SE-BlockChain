import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import {Box, Button, TextField} from "@mui/material";

import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function preventDefault(event) {
    event.preventDefault();
}

export default function BalanceView() {

    const [openModal, setOpenModal] = React.useState(false);

    // 모달에서 새로 추가할 토큰의 정보
    const [tokenToAdd, setTokenToAdd] = React.useState(null);

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

                <Button onClick={()=>{
                    setOpenModal(true);
                }}>토큰 추가</Button>

            <Modal
                open={openModal}
                onClose={()=>{
                    setOpenModal(false);
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        토큰 추가
                    </Typography>

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="토큰"
                        type="text"
                        onChange={(e)=>{
                            setTokenToAdd(e.target.value);
                        }}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={()=>{
                            alert(tokenToAdd);
                        }}
                    >
                        추가하기
                    </Button>


                </Box>
            </Modal>

        </React.Fragment>
    );
}
