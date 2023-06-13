const express = require('express')
const router = express.Router()
const { registerUser, LoginUser, getMe, updateProfile, newOrder } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', LoginUser)
router.get('/me', protect, getMe)
router.post('/new-order', protect, newOrder)
router.post('/me/update', protect, updateProfile)

module.exports = router