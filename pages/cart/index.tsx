import { CheckOutlined } from '@mui/icons-material'
import { Box, Button, Card, CardContent, Divider, Grid, Icon, Typography } from '@mui/material'
import React from 'react'
import { CartList, OrderSumary } from '../../components/cart'
import { ShopLayout } from '../../components/layouts'

const CardPage = () => {
    return (
        <ShopLayout title={'Carrito - 3'}  pageDescription={'Carrito de compras de la tienda'}>

            <Typography variant='h1' component='h1'>Carrito</Typography>

            <Grid container>
                <Grid item xs={ 12 } sm={ 7 }>
                    {/* CartList */}
                    <CartList
                        editable
                    />
                </Grid>

                <Grid item xs={ 12 } sm={ 5 }>
                    {/*  */}
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant='h1'>Orden</Typography>
                            <Divider sx={{ my:1 }}/>

                            <OrderSumary/>

                            <Box sx={{ mt:3 }}>
                                <Button color='secondary' className='circular-btn' fullWidth>
                                    Checkout <CheckOutlined fontSize='small'/>
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>


        </ShopLayout>
    )
}

export default CardPage