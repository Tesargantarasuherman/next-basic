import dbConnect from '../../../utils/dbConnect'
import type { NextApiRequest, NextApiResponse } from 'next'
import User from '../../../models/User'
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const email = req.body.email;
    const password = req.body.password;


    User.findOne({ email: req.body.email}).then(user => {

        if ((!user || !bcrypt.compareSync(req.body.password, user.password))) {
            res.status(400).json({ success: false,message:'Email or Password invalid'})
        }
        else{
            const token = jwt.sign({role:user.role},'secretValue',{expiresIn:'1h'}) 

            user.token = token;
            user.save();
    
            return res.status(200).json({
                success: true, data: {
                    id: user.id,
                    name: user.name,
                    token
                }
            })
        }
    })

}