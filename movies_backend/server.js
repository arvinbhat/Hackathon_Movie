const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/login");

app.listen(4000, "0.0.0.0", () => {
  console.log("Server running at port 4000");
});
