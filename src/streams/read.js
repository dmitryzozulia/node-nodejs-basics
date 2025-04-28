import fs from "fs";

const read = async () => {
  fs.readFile("./files/fileToRead.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    process.stdout.write(data);
  });
};

await read();

