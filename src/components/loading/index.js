import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { LoadingComponent } from './styles'

const Loading = () => {


    return (
        <LoadingComponent className=''>
            <div className='bg-white p-5 rounded'>
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            </div>
        </LoadingComponent>
    )
}

export default Loading
