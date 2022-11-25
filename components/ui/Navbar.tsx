import NextLink from 'next/link'
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { AppBar, Link, Toolbar, Typography, Box, Button, IconButton, Badge } from '@mui/material';

export const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <NextLink href={''} passHref>
                    <Box display='flex' alignItems='center' color='black'>
                        <Typography variant='h6'>Teslo |</Typography>
                        <Typography sx={{ml:0.5}}>Shop</Typography>
                    </Box>
                </NextLink>

                <Box flex={ 1 }/>

                <Box sx={{display: { xs:'none', sm:'block' } }}>
                    <NextLink href='/category/men' passHref>
                            <Button>Hombres</Button>
                        
                    </NextLink>
                    
                    <NextLink href='/category/women' passHref>
                        
                            <Button>Mujeres</Button>
                    
                    </NextLink>

                    <NextLink href='/category/kid' passHref>          
                            <Button>Niños</Button>
                    </NextLink>
                </Box>
            
                <Box flex={ 1 }/>
                <IconButton>
                    <SearchOutlined/>
                </IconButton>

                <NextLink href='/cart' passHref>
                    <>
                        <IconButton>
                            <Badge badgeContent={ 2 } color='secondary'>
                                <ShoppingCartOutlined/>
                            </Badge>
                        </IconButton>
                    </>
                </NextLink>

                <Button>
                    Menu
                </Button>

            </Toolbar>
        </AppBar>
    )
}
