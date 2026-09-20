const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const menuController = require('../controllers/menuController');
const orderController = require('../controllers/orderController');

// existing routes
router.get('/', homeController.getHome);
router.get('/about', aboutController.getAbout);
router.get('/restaurants/:id/menu', menuController.getMenuByRestaurant);

// new order routes
router.post('/orders', orderController.createOrder);
router.get('/orders/:id', orderController.getOrder);

module.exports = router;
router.post('/orders/:id/update', orderController.updateOrder); 
router.post('/orders/:id/cancel', orderController.cancelOrder); 