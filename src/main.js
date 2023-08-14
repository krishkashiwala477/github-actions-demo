const express = require("express");

const app = express();
app.get("/", (req, res) => {
  return res
    .status(200)
    .json(
      "successfully setup this node.js server with ec2 and github actions."
    );
});

app.listen(9000, () => console.log("server started at 9000"));
