require('dotenv').config();

const development = {
  username: process.env.BD_USER,
  password: process.env.BD_PASS,
  database: process.env.BD_DATABASE,
  host: process.env.BD_HOST,
  port: process.env.BD_PORT,
  dialect: process.env.BD_DIALECT
}