import Cookies from "cookie";
import type { NextApiRequest, NextApiResponse } from 'next'


  export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {    res.setHeader("Set-Cookie",Cookies.serialize('token',req.body.token,{
        httpOnly:true,
        secure: process.env.NODE_ENV !== "development",
        maxAge:60 * 60,
        sameSite: "strict",
        path:"/",
    }));
    res.statusCode = 200;
    res.json({success:true});
}
