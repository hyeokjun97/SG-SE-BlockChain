import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import LogoutIcon from '@mui/icons-material/Logout';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import {Link} from "react-router-dom";

export default function SiteMenu(){

    return <React.Fragment>
        <Link to={'/main'} style={{color: '#000', textDecoration: 'none'}}>
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="대시보드"/>
            </ListItemButton>
        </Link>

        <Link to={'/coin'} style={{color: '#000', textDecoration: 'none'}}>
            <ListItemButton>
                <ListItemIcon>
                    <CurrencyBitcoinIcon/>
                </ListItemIcon>
                <ListItemText primary="코인전송"/>
            </ListItemButton>
        </Link>

        <Link to={'/transactions'} style={{color: '#000', textDecoration: 'none'}}>
            <ListItemButton>
                <ListItemIcon>
                    <BarChartIcon/>
                </ListItemIcon>
                <ListItemText primary="트랜잭션 조회"/>
            </ListItemButton>
        </Link>

        {/*<Link to={'/token'} >*/}
        {/*    <ListItemButton>*/}
        {/*        <ListItemIcon>*/}
        {/*            <LayersIcon/>*/}
        {/*        </ListItemIcon>*/}
        {/*        <ListItemText primary="토큰 추가 및 발행"/>*/}
        {/*    </ListItemButton>*/}
        {/*</Link>*/}

            <ListItemButton onClick={()=>{
                window.showBusy(3000);
                window.location.href = "/login";
            }}>
                <ListItemIcon>
                    <LogoutIcon/>
                </ListItemIcon>
                <ListItemText primary="로그아웃"/>
            </ListItemButton>


    </React.Fragment>
}
