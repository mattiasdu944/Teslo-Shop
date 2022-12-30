import { ShopLayout } from '../components/layouts/ShopLayout';

import { Typography } from "@mui/material";
import { ProductList } from '../components/products';
import { useProducts } from '../hooks';

export default function Home() {


  const { products, isLoading } = useProducts('/products')


  return (
    <ShopLayout title={'Teslo-Shop | Home'} pageDescription={'Ecuentra todos los productos de Teslo aqui'}>
      <Typography variant='h1' component='h1'>Teslo-Shop</Typography>
      <Typography variant='h2' sx={{mb:1}}>Todos los Productos</Typography>

      {
        isLoading
        ? <h1>Cargando...</h1>
        : <ProductList  products={ products }/>
      }

    </ShopLayout>
  )
}
