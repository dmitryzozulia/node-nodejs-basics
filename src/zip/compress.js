import fs from "fs";
import zlib from "zlib";

const compress = async () => {
  if (fs.existsSync("./files/fileToCompress.txt")) {
    const resource = fs.createReadStream("./files/fileToCompress.txt");
    const destination = fs.createWriteStream("./files/archive.gz");
    const compress = zlib.createGzip();
    resource.pipe(compress).pipe(destination);
    destination.on("finish", async () => {
      await fs.promises.unlink("./files/fileToCompress.txt");
    });
    console.log("File was succesfully compressed. Source file was deleted!");
  } else {
    console.error("No source file!");
  }
};

await compress();

