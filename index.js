const http = require("http");
const express = require("express");

const app = express();

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`server is running on port ${PORT}`);
});
