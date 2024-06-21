const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const token = jwt.sign({ user_email: user.email}, "a26ecb58e945422132e906f03b546b1f13bfbabd32b44aee44eca191927742a1", { expiresIn: "7d" });
  return token;
};
module.exports = generateToken;