import { useState } from 'react';
import Model from '../component/model';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const MenuAppBar = ({ submitid }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Youtube Player
                        </Typography>
                        <Button color="inherit" onClick={handleClickOpen}>Add Playlist</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Model handleClose={handleClose} open={open} submitid={submitid} />
        </>
    );
}
export default MenuAppBar