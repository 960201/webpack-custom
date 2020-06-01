let express = require("express");

let app = express();

app.get("/api/user/", (req, res) => {
  res.send("132");
});

app.listen(3000);
