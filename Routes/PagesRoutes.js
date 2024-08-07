import { Router } from "express";
import { Create, Details, MainPage } from "../Controllers/PagesController.js";

const PagesRouter = Router();

PagesRouter.get("/", MainPage);

PagesRouter.get("/home", MainPage);

PagesRouter.get("/create", Create);

PagesRouter.get("/details", Details);

export default PagesRouter;
