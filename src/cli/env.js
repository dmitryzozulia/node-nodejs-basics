const parseEnv = () => {
  const rssVars = Object.entries(process.env)
    .filter(([key]) => key.startsWith("RSS_"))
    .map(([key, data]) => `${key}=${data}`)
    .join("; ");
  console.log(rssVars);
};

parseEnv();

