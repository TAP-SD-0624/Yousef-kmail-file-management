import { join } from "path";
import { DeleteFile as RemoveFile } from "../Utils/FilesUtils.js";
import { mkdir } from "fs";
export const ListFiles = async (req, res) => {};

export const Create = async (req, res) => {
  const { path, name } = req.body;
  mkdir(join("./Data", path, name), { recursive: true }, (err) => {
    console.log(err);
  });
  // const { relativePath } = req.body;
  // DeleteFile(relativePath);
  res.status(200).json({});
};

export const DeleteFile = async (req, res) => {
  const { relativePath } = req.body;
  console.log(relativePath);
  RemoveFile(relativePath);

  res.status(200).json({});
};
