const { check } = require('express-validator');


exports.loginValidation = [
    check('email', 'Invalid Email').isEmail(),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]

