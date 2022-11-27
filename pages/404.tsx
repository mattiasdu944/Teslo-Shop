import { Box, Typography } from '@mui/material';
import React from 'react'
import { ShopLayout } from '../components/layouts/ShopLayout';

const Custom404 = () => {
    return (
        <ShopLayout title={'Page not Found'} pageDescription={'Teslo Shop - Page not found'}>
            <Box 
                display='flex'
                justifyContent='center' 
                alignItems='center' 
                height='calc(100vh - 200px)'
                gap={4}
                sx={{flexDirection: {xs:'column', sm: 'row'}}}
            >       
                <Typography variant='h1' component='h1' fontSize={90} fontWeight={200}>404 |</Typography>
                <Typography>No se econtro esta pagina</Typography>
            </Box>
        </ShopLayout>
    )
}

export default Custom404