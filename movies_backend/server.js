const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user");
const reviewRouter = require("./routes/review")
const moviesRouter = require("./routes/movies")
const app = express();

app.use(cors());
app.use(express.json());
app.use("/user",userRouter)
app.use("/review",reviewRouter)
app.use("/movies",moviesRouter)

app.listen(4000, "0.0.0.0", () => {
  console.log("Server running at port 4000");
});
