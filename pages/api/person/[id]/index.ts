import type { NextApiRequest, NextApiResponse } from 'next'

export default function getPersonById(req:NextApiRequest,res:NextApiResponse) {
    if(req.method !== 'GET'){
        res.status(500).json({message:'sorry we only allowed Get Request'})
    }
    res.json({byId:req.query.id,message:'Get Person By Id'});
}
