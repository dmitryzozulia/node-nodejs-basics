import { Transform } from "stream";

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, _, callback) {
      const stringReversed =
        chunk.toString().split("").reverse().join("") + "\n";
      this.push(stringReversed);
      callback();
    },
  });
  process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();

