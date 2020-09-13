const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const itemRoute = require("./routes/API/Items");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

app.use("/api/items", itemRoute);
app.use("/", (req, res, next) => {
  res.send({
    msg: "here is the home route",
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
