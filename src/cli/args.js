const parseArgs = () => {
  const args = process.argv.slice(2);
  const output = [];
  args.forEach((item, index) => {
    if (item.startsWith("--")) {
      output.push(`${item.slice(2)} is ${args[index + 1]}`);
    }
  });

  console.log(output.join(", "));
};

parseArgs();

