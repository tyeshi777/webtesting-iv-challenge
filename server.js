const express = require("express");

const server = express();

server.use(express.json());

server.get("/", async (req, res) => {
  res.send("hello world");
});

module.exports = server;
