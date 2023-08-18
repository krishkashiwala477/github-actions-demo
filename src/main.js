const express = require("express");

const app = express();
app.get("/", (req, res) => {
  return res
    .status(200)
    .json(
      "successfully setup this node.js server with ec2 and github actions."
    );
});
app.get("/test", (req, res) => {
  return res
    .status(200)
    .json(
      "Man you have nailed have confidence on yourself god will help you and you will succed in life."
    );
});
app.get("/temp", (req, res) => {
  return res
    .status(200)
    .json(
      "Ok done move on to ebuyers backend but still check if any other method rather than transferring files to remote server."
    );
});
app.get("/krish", (req, res) => {
  return res.status(200).json("last route to check before finalizing");
});
app.listen(9000, () => console.log("server started at 9000"));
