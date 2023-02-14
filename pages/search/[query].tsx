import { GetServerSideProps, NextPage } from 'next'
import { dbProducts } from '../../database'
import { IProduct } from '../../interfaces/products';

import { Box, Typography } from '@mui/material'
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../components/products'


interface Props{
    products: IProduct[];
    foundProducts : boolean;
    query: string;
}

const SearchPage: NextPage<Props> = ({ products, query, foundProducts }) => {
    return (
        <ShopLayout title={'Teslo-Shop | Search'} pageDescription={'Ecuentra todos los productos de Teslo aqui'}>
            <Typography variant='h1' component='h1'>Buscar Producto</Typography>

            {
                foundProducts
                ? <Typography variant='h2' sx={{mb:1}}>Resultados de: { query }</Typography>
                : (
                    <Box display='flex' gap={ 1 }>
                        <Typography variant='h2' sx={{mb:1}}>No se econtro ningun producto: </Typography>
                        <Typography variant='h2' sx={{mb:1}}>{ query }</Typography>
                    </Box>
                )
            }
            <ProductList  products={ products }/>
        </ShopLayout>
    )
}



export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { query = '' } = params as { query : string };
    let products = await dbProducts.getProductsByTerm( query );
    const foundProducts = products.length > 0;

    if( !foundProducts ){  
        products = await dbProducts.getAllProducts();
    }

    return {
        props: {
            products,
            foundProducts,
            query
        }
    }
}


export default SearchPage