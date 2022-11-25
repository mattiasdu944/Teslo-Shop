import {FC} from 'react'
import Head from 'next/head';

interface Props{
    title : string;
    children : any
    pageDescription : string;
    imageFullUrl? : string;
}   

export const ShopLayout:FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
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

            </nav>

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
