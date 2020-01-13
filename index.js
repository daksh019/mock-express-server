const testpaths = require("./testData").testpaths;
const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

testpaths.forEach(pathInfo => {
  const { method, path, response } = pathInfo;
  app[method](path, (req, res) => {
    console.log("got a hit at path: ", path);
    res.status(response.status);
    if (response.body) {
      res.json(response.body);
    } else {
      res.send();
    }
  });
});

app.use((req, res, next) => {
  next();
});

app.get("/", (req, res) => {
  return res.status(200).send("Hello World!");
});

server.listen(3000, (result, err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("started server");
    console.log(result);
  }
});
