import dbConnect from '../../../utils/dbConnect'
import type { NextApiRequest, NextApiResponse } from 'next'
import User from '../../../models/User'
const bcrypt = require('bcryptjs');

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    const hashedPass = bcrypt.hashSync(req.body.password, 10);

    const data_res = {
        "name": req.body.name,
        "email": req.body.email,
        "role": req.body.role,
        "password": hashedPass,
    }
    switch (method) {
        case 'GET':
            try {
                const users = await User.find({});

                res.status(200).json({ success: true, data: users })
            }
            catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        case 'POST':
            try {

                const user = await User.create(
                    data_res
                );
                res.status(201).json({ success: true, data: user })
            }
            catch {
                res.status(400).json({ success: false })
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
}