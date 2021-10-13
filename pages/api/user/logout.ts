import dbConnect from '../../../utils/dbConnect'
import type { NextApiRequest, NextApiResponse } from 'next'
import User from '../../../models/User'
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.body.token;

    await User.findOne({ token: token }).then(user=>{
        const token_baru = Math.random().toString(36).substring(2, 15);
        user.token = token_baru;
        user.save();

        return res.status(400).json({ success: false,message:'Logout Success'})

    });

}