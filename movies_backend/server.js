const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/users");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/login", userRoute);

app.listen(4000, "0.0.0.0", () => {
  console.log("Server running at port 4000");
});
