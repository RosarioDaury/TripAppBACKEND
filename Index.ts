import express, {Request} from "express";
import 'dotenv/config';
import { ConnectionManagement } from "./src/Data/MongoConnection";
import UserRouter from "./src/Routes/UserRoutes";
import PlacesRouter from "./src/Routes/PlacesRoutes";
import bodyParser from "body-parser";
import cors from 'cors';
const App: express.Application = express();
App.use(bodyParser.json());
App.use(cors<Request>());
App.use('/User', UserRouter);
App.use('/Places', PlacesRouter);

App.listen(process.env.PORT, () => {
    console.log(`[SUCCESS] SERVER IS UP ON PORT: ${process.env.PORT}...`);
    ConnectionManagement.Connect();
})