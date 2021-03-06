import dbConnect from '../../../utils/dbConnect'
import type { NextApiRequest, NextApiResponse } from 'next'
import Blog from '../../../models/Blog'
import User from '../../../models/User'

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    const token = req.headers.authorization;

    const validation = await User.findOne({ token: token });

    if (!validation) {
        res.status(401).json({
            success: false, message: 'Method Not Allowed',
        })
    }
    else {
        switch (method) {
            case 'GET':
                try {
                    const blogs = await Blog.find({});

                    res.status(200).json({ success: true, data: blogs })
                }
                catch (error) {
                    res.status(400).json({ success: false })
                }
                break;
            case 'POST':
                try {
                    const blog = await Blog.create(req.body);
                    res.status(201).json({ success: true, data: blog })
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
}