import  'dotenv/config' 
import cors from 'cors';
import express from "express";
import routes from './routes';

const app = express();
app.use(express.json())

app.use((_req,res, next) => {
    res.header("Access-Control-Allow-Headers","*")
    app.use(cors())
    next();
})

app.use(cors())

routes(app)

app.listen(process.env.PORT_SERVER,()=>console.log('Server is running on port 3000'))