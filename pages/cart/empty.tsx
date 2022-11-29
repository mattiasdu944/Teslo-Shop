import { ShopLayout } from "../../components/layouts"
import { Box, Button, Typography } from "@mui/material"
import { RemoveShoppingCartOutlined } from "@mui/icons-material"
import Link from "next/link"


const empty = () => {
    return (
        <ShopLayout title={"Carrito vacio"} pageDescription={"No hay articulos en el carrito de compras"}>
            <Box 
                display='flex'
                justifyContent='center' 
                alignItems='center' 
                height='calc(100vh - 200px)'
                gap={4}
                sx={{flexDirection: {xs:'column', sm: 'row'}}}
            >       
                <RemoveShoppingCartOutlined sx={{ fontSize:100 }}/>
                <Box display='flex' flexDirection='column' alignItems='center'>
                    <Typography>Su carrito esta vacio</Typography>
                    <Link href='/' passHref>
                        <Button>Regresar a inicio</Button>
                    </Link>
                </Box>
            </Box>
        </ShopLayout>
    )
}

export default empty