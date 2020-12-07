const express = require("express");
const port = 8000;
const app = express();
app.listen(port, () => {
  console.log("My server is running on the port=", port);
});
