import { readdirSync, promises, rm } from "fs";
import { join } from "path";
import { ErrorOr } from "../Types/ErrorOr";
export const FileUtil = {};
export function BuildFilesTree(dir, relativeDir = "") {
  const entries = readdirSync(dir, { withFileTypes: true });
  const result = [];

  for (const entry of entries) {
    const res = join(relativeDir, entry.name);
    if (entry.isDirectory()) {
      var resultt = BuildFilesTree(join(dir, entry.name), res);
      result.push({
        relativePath: res,
        name: entry.name,
        isDirectory: true,
        children: resultt,
      });
    } else {
      result.push({
        relativePath: res,
        name: entry.name,
        isDirectory: false,
        children: [],
      });
    }
  }
  return result;
}

export const ReadFile = async (path) => {
  try {
    var result = new ErrorOr();
    const fullPath = join("./Data", path);
    const data = await promises.readFile(fullPath);
    result.data = data.toString();
    return result;
  } catch (e) {
    result.isSuccessful = false;
    result.errors.push(`${path} is not a file`);
    return result;
  }
};

export function DeleteFile(relativePath) {
  const path = join("./Data", relativePath);
  rm(path, { recursive: true }, () => {});

  // if (lstatSync(path).isDirectory()) {
  //   rmdir(path, (err) => {
  //     if (err) console.log("error directory");
  //     else console.log("directory deleted");
  //   });
  // } else {
  //   unlink(path, (err) => {
  //     if (err) console.log("error");
  //     else console.log("deleted");
  //   });
  // }
}
