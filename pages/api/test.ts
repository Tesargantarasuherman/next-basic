import dbConnect from '../../utils/dbConnect'
import type { NextApiRequest, NextApiResponse } from 'next'

dbConnect();

export default async (req:NextApiRequest,res:NextApiResponse) =>{
    res.json({hello:'world'});
}