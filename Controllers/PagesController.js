import { BuildFilesTree, ReadFile } from "../Utils/FilesUtils.js";

export const MainPage = (req, res) => {
  res.render("index.ejs", { data: BuildFilesTree("./Data") });
  // res.status(200).json({ data: BuildFilesTree("./Data") });
};

export const Create = async (req, res) => {
  res.render("create.ejs");
};

export const Details = async (req, res) => {
  const { path } = req.query;
  const result = await ReadFile(path);
  const fileContent = "";
  if (result.isSuccessful) fileContent = result.data;
  else {
    BuildFilesTree(path);
  }
  res.render("details.ejs", {
    fileContent: fileContent,
  });
};
