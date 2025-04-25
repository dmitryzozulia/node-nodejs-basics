import fs from "fs";

const remove = async () => {
  fs.unlink("./files/fileToRemove.txt", (err) => {
    if (err) {
      console.error("FS operation failed", err);
    } else {
      console.log("File deleted successfully");
    }
  });
};

await remove();

