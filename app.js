import express from "express";
import { FilesRouter, PagesRouter } from "./Routes/index.js";
import bodyParser from "body-parser";

//express app
const app = express();

//set express to use ejs
app.set("view engine", "ejs");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", PagesRouter);
app.use("/api/file", FilesRouter);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
