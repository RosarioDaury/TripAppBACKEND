import { Router } from "express";
import { AuthUser, CreateUser, GetFavorites, AddToFavorites, RemoveFromFavorites } from "../Controllers/UserController";

const UserRouter = Router();

UserRouter.post('/Auth', AuthUser);
UserRouter.post('/Create', CreateUser);
UserRouter.get('/Favorites/:UserID', GetFavorites);
UserRouter.post('/Favorites/Added', AddToFavorites);
UserRouter.post('/Favorites/Remove', RemoveFromFavorites);

export default UserRouter;