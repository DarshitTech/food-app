const express = require('express');

const authMiddleware = require("../middleware/authMiddleware");
const { createRestaurantController, deleteRestaurantController } = require('../controller/restaurantController');
const { getAllRestaurantController } = require('../controller/restaurantController');
const { get } = require('mongoose');
const { getRestaurantByIdController } = require('../controller/restaurantController');

const router = express.Router();

//routes
//CREATE  
router.post('/create', authMiddleware, createRestaurantController);

//GET ALL RESTAURANTS
router.get('/getAll', getAllRestaurantController );

//GET BY ID
router.get('/get/:id', getRestaurantByIdController);

//DELETE 
router.delete('/delete/:id', authMiddleware, deleteRestaurantController);

module.exports = router;

