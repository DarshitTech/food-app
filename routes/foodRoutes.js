const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const { createFoodController, getAllFoodController, getSingleFoodController, getFoodByRestaurantController, updateFoodController, deleteFoodController, placeOrderController, orderStatusController } = require("../controller/foodController");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

//routes
//CREATE FOOD
router.post('/create', authMiddleware, createFoodController )

//GET ALL FOOD
router.get('/getAll', getAllFoodController)

//GET BASIS OF ID
router.get('/get/:id', getSingleFoodController)

//GET BY RESTAURANT
router.get('/getByRestaurant/:id', getFoodByRestaurantController)

//UPDATE FOOD
router.put('/update/:id', authMiddleware, updateFoodController )

//DELETE
router.delete('/delete/:id', authMiddleware, deleteFoodController)

//PALACE ORDER
router.post('/placeorder', authMiddleware, placeOrderController)

//ORDER STATUS
router.post('/orderStatus/:id', authMiddleware,adminMiddleware, orderStatusController)

module.exports = router;