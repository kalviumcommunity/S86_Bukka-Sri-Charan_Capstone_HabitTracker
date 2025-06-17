const express = require("express");
const mongoose = require("mongoose");
const habitRoutes = require("./routes/habits"); 
const userRoutes = require("./routes/user");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); 

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/habits", habitRoutes); 
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("My Server is running!!!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

