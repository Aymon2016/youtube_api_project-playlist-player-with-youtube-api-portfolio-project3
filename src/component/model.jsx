
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

const Model = ({ handleClose, open, submitid }) => {

    const [id, setId] = useState('')

    const handleChange = (e) => {
        setId(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        submitid(id)
        setId('')
        handleClose()
    }

    return (
        <div>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Get Playlist</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please input your youtube playlist id.
                    </DialogContentText>
                    <form onSubmit={handleSubmit}>
                        <label>PlaylistId</label>
                        <input
                            type='text'
                            value={id}
                            name='id'
                            onChange={handleChange}
                        />
                        <DialogActions>
                            <Button type='submit'>Submit</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
export default Model