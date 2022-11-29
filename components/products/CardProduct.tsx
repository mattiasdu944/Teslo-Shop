import { FC, useMemo, useState } from 'react'
import { IProducts } from '../../interfaces'

import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import Link from 'next/link'


interface Props {
    product : IProducts
}

export const CardProduct: FC<Props> = ({ product }) => {

    const [isHovered, setIsHovered] = useState(false)

    const productImage = useMemo(() => {
        return isHovered
        ? `products/${ product.images[1]}`
        : `products/${ product.images[0]}`

    }, [isHovered, product.images])

    return (
        <Grid 
            item xs={6} 
            sm={4}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
                <Link href='/product/slug' passHref>
            <Card>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            image={ productImage }
                            alt={ product.title }
                            sx={{ transition:'all .3s ease-in-out ' }}

                        />
                    </CardActionArea>
            </Card>
                </Link>
            <Box sx={{ mt:1 }} className='fadeIn'>
                <Typography fontWeight={700}>{ product.title }</Typography>
                <Typography fontWeight={600}>Price: ${ product.price }</Typography>
            </Box>

        </Grid>
    )
}
