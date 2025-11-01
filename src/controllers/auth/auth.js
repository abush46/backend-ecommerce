const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "seceret";

function generateAuthToken(data){
  const token = jwt.sign(data, JWT_SECRET_KEY, { expiresIn: '10h' })
  return token
}
module.exports.login = async (req, res) => {

}
