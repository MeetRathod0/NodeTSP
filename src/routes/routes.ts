import { Router } from "express";
import usersRoute from "./users.routes";
const api_v1_routes = Router()

api_v1_routes.use('/api/v1/', usersRoute);

export default api_v1_routes;