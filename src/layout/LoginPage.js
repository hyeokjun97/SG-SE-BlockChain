
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NetworkImage from '../images/NetworkImage.jpg';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Local from "../dao/Local";
import Copyright from "../component/Copyright";

const theme = createTheme();

function SignInSide() {

    const [openAccounts, setOpenAccounts] = React.useState(false);
    const [count, setCount] = React.useState(0); // 새로고침용임 무시하세요

    React.useEffect(()=>{

    }, [openAccounts, count]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const password1 = data.get('password_1');
        const password2 = data.get('password_2');

        if (password1.length && password1.length < 5){
            alert("비밀번호는 5자 이상으로 설정해주세요.");
            return;
        }

        if (password1 !== password2){
            alert("비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
            return;
        }
        let mnemonic = createMnemonicSet(password1);
        setOpenAccounts(false);
        setOpenAccounts(true);
        setCount(count + 1);
        alert("mnemonic:" + mnemonic);
    };

    const createMnemonicSet = (password) => {
        const mnemonic = generateMnemonic();
        const newUsers = [...getUserList(), {
            password, mnemonic
        }]
        Local.set('user_list', newUsers);
        return mnemonic;
    }


    const generateMnemonic = () => {
        // 랜덤으로 메모닉 만듬
        const words = [
            'sogang', 'package', 'master', 'human', 'computer',
            'lambda', 'person', 'car', 'phone', 'cell',
            'node', 'json'
        ];
        const prefix = [
            'black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia',
            'green', 'lime', 'olive', 'yellow', 'navy', 'teal', 'aqua'
        ];
        const w_i = Math.ceil(Math.random() * words.length);
        const p_i = Math.ceil(Math.random() * prefix.length);
        return prefix[p_i].toUpperCase() + words[w_i].toUpperCase();
    }

    const getUserList = () => {
        // 사용자 리스트 불러오는 함수, 모양 동일하게 DB에서 불러올 수 있어야 함
        return Local.get('user_list', []);
    }

    const getUserByMnemonic = (mnemonic) => {
        for (const user of getUserList()){
            if (user.mnemonic === mnemonic){
                return user;
            }
        }
        return null;
    }

    const onClickMnemonic = (mnemonic) => {
        const user = getUserByMnemonic(mnemonic);
        alert(JSON.stringify(user));
        //TODO 여기서 이거갖고 뭘 해야함
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${NetworkImage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            서강 블록체인 지갑 계정 생성
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password_1"
                                label="사용자 비밀번호"
                                type="password"
                                id="password_1"
                                autoComplete="current-password"
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password_2"
                                label="비밀번호 확인"
                                type="password"
                                id="password_2"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                계정 생성
                            </Button>

                            <Accordion
                                expanded={openAccounts}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>생성된 사용자 계정</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {
                                            getUserList().map(user=>{
                                                return <Button
                                                    style={{
                                                        margin: 3
                                                    }}
                                                    onClick={(e)=>{
                                                        onClickMnemonic(user.mnemonic);
                                                    }}
                                                    variant="outlined">{user.mnemonic}</Button>
                                            })
                                        }
                                    </Typography>

                                </AccordionDetails>
                            </Accordion>

                            <Copyright sx={{ mt: 5 }} />
                        </Box>

                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default function LoginPage(){

    return <SignInSide></SignInSide>

}
