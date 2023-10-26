const express = require("express");
const server = express();

server.get("/api", (req, res) => {
  return res.send("This is the api");
});

server.listen(process.env.PORT || 8000, () =>
  console.log(`SERVER LISTENING ON PORT ${process.env.PORT || 8000}`)
);
