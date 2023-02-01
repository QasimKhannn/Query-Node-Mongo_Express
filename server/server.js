const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/users.routes");
const config = require("./config/db.config");
const db = require("./model");
const app = express();

// const whiteListedIps=['http://localhost:3000']
var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions)); //Middleware Registeration
app.use(express.json());
app.use(userRoutes);
db.mongoose
  .connect(
    `mongodb+srv://${config.username}:${config.password}@cluster0.11ipkex.mongodb.net/Users`,
    {
      useUnifiedTopology: true,
      UseNewUrlParser: true,
      dbName: config.dbName,
    }
  )
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch(() => {
    console.log("Connection Failed");
    process.exit();
  });
// app.get('/users', (req, res) => {
//     res.send('route is Working Fine')
// })
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
