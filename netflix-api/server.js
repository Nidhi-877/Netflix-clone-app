const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://nidhikurmi11:nidhi123@cluster0.8p1j18m.mongodb.net/netflix",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB Connected");
  });

app.use("/api/user", userRoutes);
app.listen(5000, console.log("server started"));
