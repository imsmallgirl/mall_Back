const { Sequelize } = require("sequelize");
const sequelizeConfig = require("../config/sequelize.config");

const sequelize = new Sequelize(sequelizeConfig);

module.exports = sequelize;
