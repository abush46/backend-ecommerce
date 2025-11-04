// Example functions (might include MongoDB logic)
import express from 'express'
/* exports.getAllUsers = (req, res) => {
  // Logic to fetch all users from MongoDB
  res.status(200).json({ message: 'Get all users' });
}; */
/* 
module.exports.createUser = async (req, res) => {

  // Logic to create a new user in MongoDB
 // res.status(201).json({ message: 'User created', data: userData });
  try{
     const userData = req.body;
return res.json({
            success : true,
            status : 400,
            message : "list of all categories",
            categories
                })
  }
  catch(error){
        return res.send(error.message)
    }
};
 */
const getUserById = (req, res) => {
  const userId = req.params.id;
  // Logic to fetch a user by ID
  res.status(200).json({ message: `Get user ${userId}` });
};

/* exports.getAllUsers = function (req, res)  {
  //const userId = req.params.id;
  // Logic to fetch a user by ID
  res.json({ message: `Get all user` });
}; */
export default getUserById;
