import { useProducts } from '../../hooks';

import { ShopLayout } from '../../components/layouts/ShopLayout';
import FullScreenLoading from '../../components/ui/FullScreenLoading';
import { ProductList } from '../../components/products';

import { Typography } from "@mui/material";

export default function KidPage() {


  const { products, isLoading } = useProducts('/products?gender=kid')


  return (
    <ShopLayout title={'Teslo-Shop | Home'} pageDescription={'Ecuentra todos los productos de Teslo para niños'}>
      <Typography variant='h1' component='h1'>Niños</Typography>
      <Typography variant='h2' sx={{mb:1}}>Todos los Productos para niños</Typography>
      {
        isLoading
        ? <FullScreenLoading/>
        : <ProductList  products={ products }/>
      }

    </ShopLayout>
  )
}
