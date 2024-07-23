import express, { Express, Request, response } from "express";
import dotenv from "dotenv";
import logger from "./config/wintsone_config";
import pg_pool from "./database/PostgreSQL.database";
import api_v1_routes from "./routes/routes";

let h = require("bcrypt");


dotenv.config();
let app = express();

app.use(express.json());

app.use(api_v1_routes);

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger.info(`Server is started on http://localhost:` + PORT + "/");
    let pass;
    h.hash("Admin@123", 10,(err:object,hash:string)=>{
        console.log(hash);
        pass = hash;
    });
    console.log(pass);
    
});
