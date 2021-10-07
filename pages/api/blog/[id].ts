import dbConnect from '../../../utils/dbConnect'
import type { NextApiRequest, NextApiResponse } from 'next'
import Blog from '../../../models/Blog'
dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { id },
        method
    } = req
    switch (method) {
        case 'GET':
            try {
                const blog = await Blog.findById(id);
                if (!blog) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: blog })
            }
            catch (error) {
                return res.status(400).json({ success: false })
            }
            break;
        case 'PUT':
            try {
                const blog = await Blog.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });
                if (!blog) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: blog })
            }
            catch (error) {
                return res.status(400).json({ success: false })
            }
            break;
        case 'DELETE':
            try {
                const deleteBlog = await Blog.deleteOne({ _id: id });
                if (!deleteBlog) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: {} })
            }
            catch (error) {
                return res.status(400).json({ success: false })
            }
            break;
        default:
            return res.status(400).json({ success: false })
            break;
    }
}