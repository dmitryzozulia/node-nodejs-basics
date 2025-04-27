import { cpus } from "os";
import { Worker } from "worker_threads";

const performCalculations = async () => {
  const workers = Array.from({ length: cpus().length }, (_, index) => {
    return new Promise((resolve) => {
      const worker = new Worker("./worker.js");
      worker.postMessage(10 + index);

      worker.on("message", (message) => {
        resolve(message);
      });

      worker.on("error", () => {
        resolve({ status: "error", data: null });
      });
    });
  });

  const results = await Promise.all(workers);
  console.log(results);
};

await performCalculations();

