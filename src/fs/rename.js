import fs from "fs";

const rename = async () => {
  if (
    fs.existsSync("./files/properFilename.md") ||
    !fs.existsSync("./files/wrongFilename.txt")
  ) {
    console.error(new Error("Fs operation failed"));
  } else {
    fs.rename(
      "./files/wrongFilename.txt",
      "./files/properFilename.md",
      (err) => {
        if (err) {
          console.error("Erorr: ", err);
        } else {
          console.log("File successfully renamed");
        }
      }
    );
  }
};

await rename();

