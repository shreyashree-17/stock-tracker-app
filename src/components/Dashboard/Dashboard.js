import React, { useState, useEffect } from 'react';
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
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    

    const toggleSidebar = () => {
        if (window.innerWidth <= 768) {
            setIsSidebarOpen(false);
        } else {
            setIsSidebarOpen(true);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', toggleSidebar);
        toggleSidebar();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', toggleSidebar);
        };
    }, []);

    const togglesmallSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Navbar handleThemeChange={handleThemeChange} toggleSidebar={togglesmallSidebar}/>
            {isSidebarOpen && <Sidebar />} {/* Show the sidebar only when isSidebarOpen is true */}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7}> {/* Adjust grid layout for different screen sizes */}
                        <WelcomeMsg />
                    </Grid>
                    <Grid item xs={12} md={5}> {/* Adjust grid layout for different screen sizes */}
                        <BarChart />
                    </Grid>
                    <Grid item xs={12} md={3.5}> {/* Adjust grid layout for different screen sizes */}
                        <UpdateChart index={0} />
                    </Grid>
                    <Grid item xs={12} md={3.5}> {/* Adjust grid layout for different screen sizes */}
                        <UpdateChart index={1} />
                    </Grid>
                    <Grid item xs={12} md={5}> {/* Adjust grid layout for different screen sizes */}
                        <UpdateChart index={2} />
                    </Grid>
                    <Grid item xs={12} md={7}> {/* Adjust grid layout for different screen sizes */}
                        <ExpandedBarChart />
                    </Grid>
                    <Grid item xs={12} md={5}> {/* Adjust grid layout for different screen sizes */}
                        <PieChart />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
