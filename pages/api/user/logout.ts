import dbConnect from '../../../utils/dbConnect'
import type { NextApiRequest, NextApiResponse } from 'next'
import User from '../../../models/User'
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.body.token;

    await User.findOne({ token: token }).then(user=>{
        const token_baru = user.password;
        user.token = token_baru;
        user.save();

        return res.status(201).json({ success: true,message:'Logout Success'})

    });

}