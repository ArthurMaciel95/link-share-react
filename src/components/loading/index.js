import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop } from '@mui/material';
import Box from '@mui/material/Box';
import { LoadingComponent } from './styles'

const Loading = ({ loading, handleClose }) => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
            onClick={handleClose}
        >
            <CircularProgress color="primary" />
        </Backdrop>
    )
}

export default Loading
