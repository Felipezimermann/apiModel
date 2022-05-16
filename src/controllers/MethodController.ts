require('dotenv/config')
import { Request, Response } from 'express';


class MethodController{

    static async methodPost(req:Request,res:Response){
        try {
            const { body } = req;
            
            return res.status(200).json(body);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };    
    
    static async methodGet(req:Request,res:Response){
        try {
            let matricula = req.query.nr_matricula;
            
            return res.status(200).json(matricula);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }; 

}
export default MethodController;