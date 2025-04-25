import fs from "fs";

const read = async () => {
  fs.readFile("./files/fileToRead.txt", "utf-8", (err, data) => {
    if (err) {
      console.error("FS operation failed", err);
    } else {
      console.log(data);
    }
  });
};

await read();

