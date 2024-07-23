
import logger from "../config/wintsone_config";
import dotenv from "dotenv";
import { Pool, PoolConfig, PoolClient } from 'pg';


dotenv.config({ path: `${process.cwd()}/.env` });

const config: PoolConfig = {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}

const pg_pool = new Pool(config);

pg_pool.on('error', (err: Error) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

export default pg_pool
