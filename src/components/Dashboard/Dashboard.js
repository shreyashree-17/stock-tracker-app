'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { Grid } from '@mui/material';
import BarChart from '../Charts/BarChart';
import UpdateChart from '../Charts/UpdateChart';
import ExpandedBarChart from '../Charts/ExpandedBarChart';
import PieChart from '../Charts/PieChart';
import WelcomeMsg from '../WelcomeMsg/WelcomeMsg';

export default function Dashboard({ handleThemeChange }) {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Navbar handleThemeChange={handleThemeChange} />
            <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <WelcomeMsg />
                    </Grid>
                    <Grid item xs={5}>
                        <BarChart />
                    </Grid>
                    <Grid item xs={3.5}>
                        <UpdateChart index={0} />
                    </Grid>
                    <Grid item xs={3.5}>
                        <UpdateChart index={1} />
                    </Grid>
                    <Grid item xs={5}>
                        <UpdateChart index={2} />
                    </Grid>
                    <Grid item xs={7}>
                        <ExpandedBarChart />
                    </Grid>
                    <Grid item xs={5}>
                        <PieChart />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
