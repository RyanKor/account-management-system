const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json");
const db = {};
const sequelize = new Sequelize(
  config.username,
  config.password,
  config.database,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.employee = require("./employee")(sequelize, Sequelize);


module.exports = db;