import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import {Box, Button, TextField} from "@mui/material";

import Modal from '@mui/material/Modal';
import { web3 } from '../dao/helper/web3Helper';
import QueryCoinAPI from '../dao/QueryCoinAPI';

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



//export const deployCustomCoin = React.useState()

function preventDefault(event) {
    event.preventDefault();
}
export default function BalanceView() {
    const [customToken, setCustomToken] = React.useState({
        tokenName: "",
        tokenSymbol: "",
        amount: 0
    })
    const [openModal, setOpenModal] = React.useState(false);

    // 모달에서 새로 추가할 토큰의 정보
    const [customTokenAddress, setCustomTokenAddress] = React.useState(null) 

    // 모달에서 새로 발행할 토큰의 정보
    const [tokenName, setTokenName] = React.useState(null)
    const [tokenSymbol, setTokenSymbol] = React.useState(null)
    const [tokenAmount, setTokenAmount] = React.useState(0)
    
    
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
    
    //Deply
    const getDeploy = () => {
        //name, symbol, mint
        QueryCoinAPI.instance.deployToken(tokenName, tokenSymbol, tokenAmount)
    }
    
    //
    const checkCustomTokenAddress = () => {
        //let tokenList = get();
        //console.log(tokenList)
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

                <Button onClick={()=>{
                    setOpenModal(true);
                }}>토큰 발행</Button>

            {/* token add*/}
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
                    커스텀 토큰 추가
                </Typography>

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="커스텀 토큰 주소"
                    type="text"
                    onChange={(e)=>{
                        setCustomTokenAddress(e.target.value)
                    }}
                />
                
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={()=>{
                        checkCustomTokenAddress()
                        setOpenModal(false)
                    }}
                >
                    발행하기
                </Button>
            </Box>
            </Modal>

            {/* token deploy*/}
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
                        label="토큰 이름"
                        type="text"
                        onChange={(e)=>{
                            setTokenName(e.target.value);
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="토큰 심볼"
                        type="text"
                        onChange={(e)=>{
                            setTokenSymbol(e.target.value);
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="발행량"
                        type="text"
                        onChange={(e)=>{
                            setTokenAmount(e.target.value);
                        }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={()=>{
                            getDeploy()
                            setOpenModal(false)
                        }}
                    >
                        발행하기
                    </Button>


                </Box>
            </Modal>    
        </React.Fragment>
    );
}
