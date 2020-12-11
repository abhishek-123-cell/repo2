const express = require("express");
// const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;
app.use("/", require("./routes"));
app.post(
  "/",
  (req, res) => {
    res.status(200).json({
      message: "hello world",
    });
  }


  
);
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }

  console.log(`Server is running on port: ${port}`);
});
