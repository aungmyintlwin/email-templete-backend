const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const userController = require('../controllers/user.controller');
const { loginValidation} = require('./validation/validation')


router.post('/check', authMiddleware, userController.get);

/* POST  user login */
router.post('/login', loginValidation, userController.login);


module.exports = router;