import { verify } from 'jsonwebtoken';
import ('dotenv/config')
import { Request, Response, NextFunction } from 'express';


export default class authenticatedToken {

    static async ensureAuthenticated(req:Request,res:Response,next:NextFunction){
        const  authToken =  req.headers.authorization

        if(!authToken){
            return res.status(401).json({
                message: 'Unauthorized'
            })
        }

        const [, token] = authToken.split(" ");

        const parseJwt = (token: string) => {
            try {
                const tokenAcess = JSON.parse(atob(token.split('.')[1]))
                return tokenAcess.sub;
            } catch (e) {
                return null;
            }
        };

        try{
            
            verify(token, process.env.SECRETKEY, function(err, decoded) {
                req.query.paramToken = decoded;
                if(err !== null){
                    throw err
                }
                return next();
            });

        }catch (err){
            return res.status(401).json({
                message: 'Unauthorized'
            })
        }
    }

}
