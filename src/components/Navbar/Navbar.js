import { AppBar, Avatar, Container, Divider, IconButton, Switch, Toolbar } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from "react";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import styles from "./navbar.module.css"
import ThemeSwitcher from "../ThemeSwitcher";
import Searchbar from "./Searchbar";

export default function Navbar({ handleThemeChange }) {
    return <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
            <Container sx={{ flexGrow: 1, marginLeft: 0, display: "flex", alignItems: "center" }}>
                <ShowChartIcon /><b>Tracker</b>
                <Searchbar />
            </Container>
            <ThemeSwitcher handleThemeChange={handleThemeChange} />
            <IconButton sx={{ mr: 1 }}>
                <NotificationsIcon />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <p className={styles.userName}>User Name</p>
            <Avatar sx={{ width: 30, height: 30 }} alt="User Name" src="https://images.unsplash.com/photo-1613679074971-91fc27180061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" />
        </Toolbar>
    </AppBar>
}