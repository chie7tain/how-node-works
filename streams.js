const fs = require("fs");
const server = require("http").createServer();
// we want to read the file
server.on("request", (req, res) => {
  // first solution
  // fs.readFile("test-file.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });
  // second solution
  const readable = fs.createReadStream("test0-file.txt");
  readable.on("data", (chunk) => {
    res.write(chunk);
  });
  res.on("end", () => {
    res.end("end of file");
  });
  readable.on("error", (err) => {
    console.log(err);
    res.statusCode = 500;
    res.end("error file not found");
  });
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server is running on port 3000");
});
