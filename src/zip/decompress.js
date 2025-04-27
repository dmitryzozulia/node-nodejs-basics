import fs from "fs";
import zlib from "zlib";
import { pipeline } from "stream/promises";

const decompress = async () => {
  if (fs.existsSync("./files/archive.gz")) {
    const source = fs.createReadStream("./files/archive.gz");
    const destination = fs.createWriteStream("./files/fileToCompress.txt");
    const decompressStream = zlib.createGunzip();
    await pipeline(source, decompressStream, destination);
    console.log("File successfully decompressed. Source file was deleted");
    await fs.promises.unlink("./files/archive.gz");
  } else {
    console.error("No files to decompress. Please add archive.gz");
  }
};

await decompress();

