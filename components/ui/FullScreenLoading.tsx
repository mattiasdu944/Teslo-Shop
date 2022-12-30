import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react'

const FullScreenLoading = () => {
    return (
        <Box 
            display='flex'
            flexDirection='column'
            justifyContent='center' 
            alignItems='center' 
            height='calc(100vh - 200px)'
            gap={2}
        >       
            <Typography sx={{ fontWeight:700 }}>Cargando...</Typography>
            <CircularProgress thickness={ 2 }/>
        </Box>
    )
}

export default FullScreenLoading