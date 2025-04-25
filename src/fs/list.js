import fs from "fs";

const list = async () => {
  fs.readdir("./files", (err, files) => {
    if (err) {
      console.error("FS operation failed", err);
    } else {
      console.log("List of files", files);
    }
  });
};

await list();

