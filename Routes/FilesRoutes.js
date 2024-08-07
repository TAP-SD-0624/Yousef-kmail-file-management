import { Router } from "express";
import { Create, DeleteFile } from "../Controllers/FilesController.js";

const FilesRouter = Router();

FilesRouter.post("/create", Create);

FilesRouter.delete("/delete", DeleteFile);

export default FilesRouter;
