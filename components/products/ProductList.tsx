import { Grid, Card, CardActionArea, CardMedia } from '@mui/material';
import { FC } from "react"
import { IProducts } from "../../interfaces"
import { CardProduct } from './CardProduct';

interface Props{
    products: IProducts[]
}

export const ProductList: FC <Props> = ({ products }) => {
    return (
      <Grid container spacing={4}>
        {
            products.map( product => 
                <CardProduct
                    key={product.slug}
                    product={ product }
                />    
            )   
        }
      </Grid>

    )
}
