import { addUser, deleteUser, getUser, updateUser } from "../controller/users.controller";
import { Router } from "express";

const usersRoute = Router()

usersRoute.get("/users", getUser);
usersRoute.post("/users", addUser);
usersRoute.delete("/users", deleteUser)
usersRoute.patch("/users", updateUser)

export default usersRoute;