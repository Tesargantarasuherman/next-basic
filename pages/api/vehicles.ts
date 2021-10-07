import type { NextApiRequest, NextApiResponse } from 'next'

export default function getAllVehicles(req:NextApiRequest,res:NextApiResponse) {
    if(req.method !== 'GET'){
        res.status(500).json({message:'sorry we only allowed Get Request'})
    }
    res.json({hello:'world',method:req.method});
}
