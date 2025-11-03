const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Import the controller functions

// Define the routes and link them to controller functions
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);

module.exports = router; // Export the router instance
