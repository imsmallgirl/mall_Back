require("dotenv").config({ path: __dirname + "/config/.env" });
require("./models").sequelize.sync();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
