import type { NextApiRequest, NextApiResponse } from 'next'

import { db } from '../../../database'
import Product from '../../../models/Product';
import { IProduct } from '../../../interfaces/products';

type Data = { message: string } | IProduct[]

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
    
    switch( req.method ) {
        case 'GET':
            return searchProducts( req, res );

        default:
            return res.status(400).json({
                message: 'Invalid API method'
            })
    }  

}

const searchProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    
    let { query = '' } = req.query
    
    if( query.length === 0 ){
        res.status(400).json({ 
            message: 'No products found'
        });

    }

    await db.connect();
    
    query = query.toString().toLowerCase().trim();
    const products = await Product.find({ 
        $text: { $search: query }
    })
    .select('title images price inStock slug -_id')
    .lean();

    await db.disconnect(); 

    res.status(200).json( products );
}
