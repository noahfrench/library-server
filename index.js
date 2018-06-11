const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendfile("./homepage.html");
});

app.get("/annakarenina", (req, res) => {
  res.sendfile("./books/annakarenina.txt");
});

app.get("/ageofinnocence", (req, res) => {
  res.sendfile("./books/ageofinnocence.txt");
});

app.get("/candide", (req, res) => {
  res.sendfile("./books/candide.txt");
});

app.get("/janeeyre", (req, res) => {
  res.sendfile("./books/janeeyre.txt");
});

app.get("/karamazov", (req, res) => {
  res.sendfile("./books/karamazov.txt");
});

app.get("/northangerabbey", (req, res) => {
  res.sendfile("./books/northangerabbey.txt");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
