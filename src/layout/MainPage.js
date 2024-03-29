import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SiteMenu from "./SiteMenu";

import BalanceView from "../component/BalanceView";
import BalanceList from "../component/BalanceList";
import Copyright from "../component/Copyright";

import QueryCoinAPI from "../dao/QueryCoinAPI";

import * as userData from "../dao/data/user";
import { useNavigate } from "react-router-dom";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(true);

  const [balance, setBalance] = React.useState(); //
  const [users, setUsers] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const getBalance = async (user_addr) => { //
    const res = await QueryCoinAPI.instance.getBalance(user_addr);
    setBalance(res);
  };

  const getUserInfo = () => {
    const userRes = userData.getAll();
    const curUserRes = userData.getCurrentUser();
    setUsers(userRes.data);
    setCurrentUser(curUserRes.data);//
  };

  const onClickAdd = () => {
    navigate("/login");
  };
  const onClickChange = (item) => {
    if (item.address != currentUser.address) {
      navigate("/login", { state: { isLogin: true, user: item } });
      // userData.postCurrentUser(item);
      // setCurrentUser(item);
    }
  };

  React.useEffect(() => {
    //getBalance("0x307406876e70F5ebcf92f7d4Cb97D1Fb6892EAA5");//
    getUserInfo();
  }, []);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 ,
                fontWeight: 900}}
            >
              대시보드
            </Typography>

          </Toolbar>

        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <h3 style={{textAlign: 'left', marginLeft: 10, width: '100%'}}>
              <LocalAtmIcon style={{marginBottom: -5}}/> Sogang Wallet</h3>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">{SiteMenu()}</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <BalanceView />
                  <div></div>
                </Paper>
              </Grid>
              {/* Recent BalanceList */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <BalanceList
                    users={users}
                    currentUser={currentUser}
                    onClickAdd={onClickAdd}
                    onClickChange={onClickChange}
                  />
                  <div></div>
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function MainPage() {
  return <DashboardContent />;
}
