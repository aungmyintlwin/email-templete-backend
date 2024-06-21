
const generateToken = require('../middlewares/generateToken')
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');


async function get(req, res, next) {
  try {
    return res.status(200).json({
        "user": [
            {
                id: 1,
                email: 'admin@gmail.com'
            }
        ],
        "status": "OK",
        "message": "Get All Users"
    })
  } catch (err) {
      console.error(`Error while getting user`, err.message);
      next(err);
  }
}
async function login(req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const defaultUser = {
        email: 'admin@gmail.com',
        password: '12345678'
    };

    if (defaultUser?.email !== req.body.email) {
        return res.status(404).send({
          message: 'User Not Found!'
        });
    } else {
      //check password
      if(defaultUser?.password !== '12345678') {
        return res.status(401).send({ 
            message: 'Email or password is incorrect!'
        });
      }
      const token =  generateToken(defaultUser);
      return res.send({ 
        message: 'Logged in Success!',
        token
      });
    }

  } catch (err) {
      console.error(`Error while getting user`, err.message);
      next(err);
  }
}

module.exports = {
  get,
  login
};
