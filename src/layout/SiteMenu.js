import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";

export default function SiteMenu(){

    return <React.Fragment>
        <Link to={'/main'} >
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="대시보드"/>
            </ListItemButton>
        </Link>

        <Link to={'/coin'} >
            <ListItemButton>
                <ListItemIcon>
                    <ShoppingCartIcon/>
                </ListItemIcon>
                <ListItemText primary="코인전송"/>
            </ListItemButton>
        </Link>

        <Link to={'/transactions'} >
            <ListItemButton>
                <ListItemIcon>
                    <BarChartIcon/>
                </ListItemIcon>
                <ListItemText primary="트랜잭션 조회"/>
            </ListItemButton>
        </Link>

        <Link to={'/token'} >
            <ListItemButton>
                <ListItemIcon>
                    <LayersIcon/>
                </ListItemIcon>
                <ListItemText primary="토큰 추가 및 발행"/>
            </ListItemButton>
        </Link>

            <ListItemButton onClick={()=>{
                alert("로그아웃 진행 -> src/layout/SiteMenu.js 51번줄 수정해주세여");
            }}>
                <ListItemIcon>
                    <LogoutIcon/>
                </ListItemIcon>
                <ListItemText primary="로그아웃"/>
            </ListItemButton>


    </React.Fragment>
}
