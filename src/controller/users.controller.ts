import pg_pool from "../database/PostgreSQL.database";
import { UsersModel } from "../models/users.models";
import { Request, Response } from "express";
import IResponse from "../models/response.models";
import { messages } from "../config/const";


export const addUser = async (req: Request, res: Response) => {
    let response: IResponse = {};
    await pg_pool.query("").then((result) => {
        
    }).catch((error) => {

    });
    res.json();
};

export const updateUser = async () => { };
export const deleteUser = async () => { };
export const getUser = async (req: Request, res: Response) => {
    let response: IResponse = {};
    await (await pg_pool.query("select * from users").then((result) => {
        response.data = result.rows;
        response.error = false;
        response.message = messages.get_data
    }).catch((error) => {
        response.data = error;
        response.error = true;
        response.message = error.message
        console.log(error);
    }));
    res.json(response);
};