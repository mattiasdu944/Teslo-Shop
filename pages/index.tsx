import { useProducts } from '../hooks';

import { ShopLayout } from '../components/layouts/ShopLayout';
import FullScreenLoading from '../components/ui/FullScreenLoading';
import { ProductList } from '../components/products';

import { Typography } from "@mui/material";

export default function Home() {


  const { products, isLoading } = useProducts('/products')


  return (
    <ShopLayout title={'Teslo-Shop | Home'} pageDescription={'Ecuentra todos los productos de Teslo aqui'}>
      <Typography variant='h1' component='h1'>Teslo-Shop</Typography>
      <Typography variant='h2' sx={{mb:1}}>Todos los Productos</Typography>
      {
        isLoading
        ? <FullScreenLoading/>
        : <ProductList  products={ products }/>
      }

    </ShopLayout>
  )
}
