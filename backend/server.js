const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const questionsRoutes= require("./routes/questionsRoutes");
const cors = require("cors")
const connectDB = require("./config/db");
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use(cors());
app.use(express.json());
// app.use("/api/questions",questionsRoutes);
app.use('/', require("./routes/questionsRoutes"))

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});