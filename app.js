require('dotenv').config({ path: `${__dirname}/config/.env` });
require('./models').sequelize.sync({ alter: true });

const express = require('express');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routes = require('./routes');

app.use('/api', routes);

const errorHandler = require('./middlewares/errorHandler');

app.use('/api', errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
