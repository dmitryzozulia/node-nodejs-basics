import { createWriteStream } from "fs";

const write = async () => {
  const stream = createWriteStream("./files/fileToWrite.txt", { flags: "a" });

  console.log(
    "For change file please enter some text into console. To exit use ctrl+c or type exit into console."
  );

  process.stdin.on("data", (chunk) => {
    const input = chunk.toString().trim();

    if (input === "exit") {
      stream.end();
      console.log("Finished writing. Exiting...");
      process.exit();
    } else {
      stream.write(chunk);
    }
  });
};

await write();

