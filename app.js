require("dotenv").config({ path: __dirname + "/config/.env" });

const sequelize = require("./database/sequelize");

const express = require("express");
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
