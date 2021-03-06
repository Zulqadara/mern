const express = require('express')
const { requireSignIn, userMiddleware } = require('../common-middleware')
const { addItemToCart } = require('../controllers/cart')
const router = express.Router()

router.post('/user/cart/addToCart', requireSignIn, userMiddleware, addItemToCart)

module.exports = router