const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

// Initial message
app.get("/", (req, res) => {
  res.send("Learn With Fun!");
});

app.listen(port, () => {
  console.log("Learn with Fun site running on port:", port);
});
