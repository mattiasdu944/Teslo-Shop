import { initialData } from '../database/products';
import { ShopLayout } from '../components/layouts/ShopLayout';

import { Typography } from "@mui/material";
import { ProductList } from '../components/products';

export default function Home() {
  return (
    <ShopLayout title={'Teslo-Shop | Home'} pageDescription={'Ecuentra todos los productos de Teslo aqui'}>
      <Typography variant='h1' component='h1'>Teslo-Shop</Typography>
      <Typography variant='h2' sx={{mb:1}}>Todos los Productos</Typography>
      <ProductList 
        products={ initialData.products as any}
      
      />
    </ShopLayout>
  )
}
