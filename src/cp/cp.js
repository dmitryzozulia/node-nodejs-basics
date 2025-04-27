import { spawn } from "child_process";

export const spawnChildProcess = async (args) => {
  const child = spawn("node", ["./script.js", ...args], {
    stdio: ["pipe", "pipe", "inherit"],
  });

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);
};
spawnChildProcess(["someArgument1", "someArgument2"]);

