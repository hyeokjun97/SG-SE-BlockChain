import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NetworkImage from "../images/NetworkImage.jpg";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Local from "../dao/Local";
import Copyright from "../component/Copyright";
import { login, makeAccount } from "../dao/controller/login";
import LoginAPI from "../dao/LoginAPI";
import * as userData from "../dao/data/user";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const theme = createTheme();

function SignInSide() {
  const [count, setCount] = React.useState(0); // 새로고침용임 무시하세요
  const [mnemonicSet, setMnemonicSet] = React.useState([]);
  const [inputMnemonicSet, setInputMnemonicSet] = React.useState([]);
  const [showFianlButton, setShowFinalButton] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [user, setUser] = React.useState({});

  const navigate = useNavigate();
  const location = useLocation();

  console.log("SignInSide location", location);

  const signupSubmit = (event) => {
    const data = new FormData(event.currentTarget);
    const password1 = data.get("password_1");
    const password2 = data.get("password_2");
    if (password1 !== password2) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    setPassword(password1);
    console.log("asdf");
    const remainUser = userData.getRemainNode();
    console.log(remainUser);
    setUser(remainUser.data);
    alert("잘 저장하세요~");
    alert(remainUser.data.mnemonic_set);
    console.log(remainUser.data.mnemonic_set.split(" "));
    setMnemonicSet(remainUser.data.mnemonic_set.split(" "));
  };

  const loginSubmit = (event) => {
    const data = new FormData(event.currentTarget);
    const password1 = data.get("password_1");
    if (password1 !== location.state.user.password) {
      return alert("비밀번호가 일치하지 않습니다.");
    }
    setMnemonicSet(location.state.user.mnemonic_set.split(" "));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (location.state.isLogin) {
      loginSubmit(event);
    } else {
      signupSubmit(event);
    }
  };

  const onClickWord = (item) => {
    setInputMnemonicSet([...inputMnemonicSet, item]);
    const newMneSet = mnemonicSet.filter((e) => e != item);
    setMnemonicSet(newMneSet);
  };

  const onClickMinus = (item) => {
    setMnemonicSet([...mnemonicSet, item]);
    const newMneSet = inputMnemonicSet.filter((e) => e != item);
    setInputMnemonicSet(newMneSet);
  };

  const onClickSignup = () => {
    const checkSet = location.state.isLogin
      ? location.state.user.mnemonic_set.split(" ")
      : user.mnemonic_set.split(" ");
    for (let i = 0; i < checkSet.length; i++) {
      if (checkSet[i] != inputMnemonicSet[i]) {
        return alert("비밀복구단어가 일치하지 않습니다.");
      }
    }
    if (location.state.isLogin) {
      userData.postCurrentUser(location.state.user);
    } else {
      userData.add({ ...user, password: password });
      userData.postCurrentUser({ ...user, password: password });
    }
    navigate("/main");
  };

  React.useEffect(() => {
    if (inputMnemonicSet.length === 12) {
      setShowFinalButton(true);
    } else {
      setShowFinalButton(false);
    }
  }, [inputMnemonicSet]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${NetworkImage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              서강 블록체인 지갑 계정 생성
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
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

              {!location.state.isLogin && (
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
              )}
              {mnemonicSet.length == 0 && inputMnemonicSet.length == 0 && (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {location.state.isLogin ? "로그인" : "계정 생성"}
                </Button>
              )}

              {(mnemonicSet.length > 0 || inputMnemonicSet.length > 0) && (
                <Accordion expanded={mnemonicSet.length > 0}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Mnemonic Set을 순서대로 눌러주세요</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      {mnemonicSet.map((word) => {
                        return (
                          <Button
                            style={{
                              margin: 3,
                            }}
                            onClick={(e) => {
                              onClickWord(word);
                            }}
                            variant="outlined"
                          >
                            {word}
                          </Button>
                        );
                      })}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              )}
              <div style={{ height: 16 }} />
              {inputMnemonicSet.map((word) => {
                return (
                  <Button
                    style={{
                      margin: 3,
                    }}
                    onClick={(e) => {
                      onClickMinus(word);
                    }}
                    variant="outlined"
                  >
                    {word}
                  </Button>
                );
              })}
              {showFianlButton && (
                <Button
                  fullWidth
                  variant="contained"
                  onClick={onClickSignup}
                  sx={{ mt: 3, mb: 2 }}
                >
                  {location.state.isLogin ? "로그인" : "계정 생성"}
                </Button>
              )}
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default function LoginPage() {
  return <SignInSide></SignInSide>;
}
