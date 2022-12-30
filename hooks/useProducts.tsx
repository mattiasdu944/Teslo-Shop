import useSWR from 'swr';
import { IProduct } from '../interfaces/products';



const fetcher = (...args:[ key : string ]) => fetch(...args).then(res => res.json())
export const useProducts = ( url:string ) => {
    const { data, error, isLoading } = useSWR<IProduct[]>( `/api/${ url }`, fetcher )
    return {
        products : data || [],
        isLoading,
        isError : error
    }
}