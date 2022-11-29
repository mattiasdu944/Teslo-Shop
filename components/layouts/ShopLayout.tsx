import Head from 'next/head';
import { Navbar, SideMenu } from '../ui';

interface Props{
    title           : string;
    children        : any;
    pageDescription : string;
    imageFullUrl?   : string;
}   

export const ShopLayout = ({ children, title, pageDescription, imageFullUrl}:Props)  => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={pageDescription} />
                
                <meta name='og:title' content={ title }/>
                <meta name='og:description' content={ pageDescription }/>

                {
                    imageFullUrl && (
                        <meta name='og:image' content={ imageFullUrl }/>
                    )
                }
            </Head>

            <nav>
                <Navbar/>
            </nav>

            <SideMenu/>

            <main style={{
                margin: '80px auto',
                maxWidth: '80%',
                padding: '0 30px'
            }}>
                {children}
            </main>

            <footer>

            </footer>
        </>
    )
}
