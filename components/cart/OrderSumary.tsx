import { Grid, Typography } from "@mui/material"

export const OrderSumary = () => {



    return (
        <Grid container>
            <Grid item xs={6}>
                <Typography>Nª Productos</Typography>
            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end' >
                <Typography>3 Items</Typography>
            </Grid>


            <Grid item xs={6}>
                <Typography>SubTotal</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography>{ `$${ 155.35 }` }</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography>Impuestos (15%)</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography>{ `$${ 35.35 }` }</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography variant='subtitle1'>Total a Pagar</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography>{ `$${ 185.80 }` }</Typography>
            </Grid>

        </Grid>
    )
}
