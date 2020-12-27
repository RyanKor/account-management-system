const path = require("path");
const express = require("express");

require("dotenv").config();



const { sequelize } = require("./models"); 

const app = express();
sequelize.sync();

app.set("port", process.env.PORT || 3000); //포트 연동에 유의하지 않으면 렌더링 화면이 보이지 않는다.

app.use(express.json());

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "is listening");
});