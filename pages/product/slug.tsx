import { initialData } from '../../database/products';
import { ShopLayout } from '../../components/layouts'
import { ProductSlideShow, SizeSelector } from '../../components/products';

import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import { ItemCounter } from '../../components/ui';

const ProductPage = () => {

    const product = initialData.products[0]

    return (
        <ShopLayout title={product.title} pageDescription={product.description}>
            <Grid container spacing={3}>

                <Grid item xs={12} sm={7}>
                    <ProductSlideShow
                        images={ product.images }
                    />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Box display='flex' flexDirection='column'>
                        <Typography variant='h1' component='h1'>
                            {product.title}
                        </Typography>
                        <Typography variant='subtitle1' component='h2'>
                            ${product.price}
                        </Typography>
                        <Box sx={{ mt:3 }}>
                            <Typography variant='subtitle1'>Descripcion</Typography> 
                            <Typography>{ product.description }</Typography>
                        </Box>

                        <Box sx={{ my:1, display:'flex', alignItems:'center' }}>
                            <Typography variant='subtitle1'>Cantidad:</Typography>
                            <ItemCounter/>
                        </Box>
                        
                        <Box sx={{ my:1, display:'flex', alignItems:'center', gap:'.5rem' }}>
                            <Typography variant='subtitle1'>Talla:</Typography>

                            <SizeSelector
                                sizes={ product.sizes }
                            />
                        </Box>
                        {/* Agregar al carrito */}
                        <Button color='secondary' className='circular-btn'>Agregar al carrito</Button>
                        
                        {/* <Chip label='No hay disponibles' color='error' variant='outlined'/> */}

                        {/* Description */}

                    </Box>
                </Grid>
            </Grid>

        </ShopLayout>
    )
}

export default ProductPage