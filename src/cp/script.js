console.log(`Received arguments: ${process.argv.slice(2).join(", ")}`);

process.stdin.on("data", (data) => {
  const received = data.toString().trim();
  console.log(`Child received: ${received}`);
});
