import dbConnect from '../../../utils/dbConnect'
import type { NextApiRequest, NextApiResponse } from 'next'
import User from '../../../models/User'
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const email = req.body.email;
    const password = req.body.password;


    User.findOne({ email: req.body.email}).then(user => {
        if (!(user && bcrypt.compare(password, user.password))) {
            throw 'Username or password is incorrect';
        }
        const token = jwt.sign({role:user.role},'secretValue',{expiresIn:'1h'}) 

        return res.status(200).json({
            success: true, data: {
                id: user.id,
                name: user.name,
                token
            }
        })

    })

}