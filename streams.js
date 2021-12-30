const fs = require("fs");
const server = require("http").createServer();
// we want to read the file
server.on("request", (req, res) => {
  // first solution
  fs.readFile("test-file.txt", (err, data) => {
    if (err) console.log(err);
    res.end(data);
  });
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server is running on port 3000");
});
