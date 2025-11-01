const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "seceret";

function generateAuthToken(data){
  const token = jwt.sign(data, JWT_SECRET_KEY, { expiresIn: '10h' })
  return token
}
module.exports.login = (req, res) => {

   // Access the request body
    const requestData = req.body; 

   // console.log('Received data:', requestData);

    // Process the data (e.g., save to a database)
    // ...

    // Send a response back to the client
  // res.status(201).send({ message: 'Data received successfully!', data: requestData });
  return res.json({
        success: true,
        status: 200,
        message: "user Logged in",
        data: requestData,
      });
}
