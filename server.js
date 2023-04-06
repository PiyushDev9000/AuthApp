import express from "express";
import cors from 'cors';
import morgan from "morgan";
import connect from "./database/conn.js";
import router from "./router/route.js";
import path from 'path';
import { fileURLToPath } from "url";
import dotenv from 'dotenv'

const app = express();
dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about our stock
app.use(express.static(path.join(__dirname, "./client/build")));
connect()

const port = 8080;


/**HHTP GET REQUEST */
app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
});

/** API Routes*/ 


app.use('/api',router)


/**start server only when we have valid connection */
app.listen(port,()=>{
    console.log(`Server Running on ${port}`)
})