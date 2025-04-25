import fs from "fs";
const create = async () => {
  if (fs.existsSync("./files/Fresh.txt")) {
    console.error("FS operation failed");
  } else {
    fs.writeFile("./files/fresh.txt", `I'm fresh and young`, (err) => {
      if (err) {
        console.err("Error: ", err);
      } else {
        console.log("File created successfully");
      }
    });
  }
};

await create();

