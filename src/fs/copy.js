import fs from "fs";

const copy = async () => {
  if (fs.existsSync("./files_copy") || !fs.existsSync("./files")) {
    console.error("Fs operation failed");
  } else {
    fs.mkdir("./files_copy", (err) => {
      if (err) {
        console.error("Error: ", err);
      }
    });
    fs.cp("./files", "./files_copy", { recursive: true }, (err) => {
      if (err) {
        console.error("Error: ", err);
      } else {
        console.log("Folder copied");
      }
    });
  }
};

await copy();

