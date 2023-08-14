import { Router } from "express";
import { AddPlace, GetPlaces, GetPlacesById } from "../Controllers/PlacesController";
const PlacesRouter = Router();

PlacesRouter.get('/GetAll', GetPlaces);
PlacesRouter.post('/GetAll', GetPlacesById);
PlacesRouter.post('/Add', AddPlace);


export default PlacesRouter;

