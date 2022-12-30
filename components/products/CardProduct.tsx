import { FC, useMemo, useState } from 'react'
import { IProduct } from '../../interfaces'

import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import Link from 'next/link'


interface Props {
    product : IProduct
}

export const CardProduct: FC<Props> = ({ product }) => {

    const [isImageLoader, setIsImageLoader] = useState<boolean>(false)
    const [isHovered, setIsHovered] = useState<boolean>(false)

    const productImage = useMemo(() => {
        return isHovered
        ? `/products/${ product.images[1]}`
        : `/products/${ product.images[0]}`

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
                            onLoad={ () => setIsImageLoader(true) }

                        />
                    </CardActionArea>
            </Card>
                </Link>
            <Box sx={{ mt:1, display: isImageLoader ? 'block' : 'none' }} className='fadeIn'>
                <Typography fontWeight={700}>{ product.title }</Typography>
                <Typography fontWeight={600}>Price: ${ product.price }</Typography>
            </Box>

        </Grid>
    )
}
