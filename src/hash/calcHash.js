import { createHash } from "crypto";
import { createReadStream } from "fs";

const calculateHash = async () => {
  const hash = createHash("sha256");
  const stream = createReadStream("./files/fileToCalculateHashFor.txt");

  stream.on("readable", () => {
    const data = stream.read();
    if (data) {
      hash.update(data);
    } else {
      console.log("File hash: ", hash.digest("hex"));
    }
  });
};

await calculateHash();

