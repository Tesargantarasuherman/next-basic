import Cookies from "cookie";
import type { NextApiRequest, NextApiResponse } from 'next'

// interface Data{
    
//   }
  export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {    res.setHeader("Set-Cookie",Cookies.serialize('token','',{
        httpOnly:true,
        secure: process.env.NODE_ENV !== "development",
        expires:new Date(0),
        sameSite: "strict",
        path:"/",
    }));
    res.statusCode = 200;
    res.json({success:true});
}
