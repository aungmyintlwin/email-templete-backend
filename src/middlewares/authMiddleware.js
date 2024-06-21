const jwt = require('jsonwebtoken');

async function verifyToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
        const decoded = jwt.verify(JSON.parse(token),"a26ecb58e945422132e906f03b546b1f13bfbabd32b44aee44eca191927742a1");
        const userEmail = decoded.user_email;
        if (!userEmail) {
            res.status(401).json({ error: 'Invalid token *****' });
        }
        if(userEmail !== 'admin@gmail.com') {
            res.status(401).json({ error: 'Invalid token *****' });
        }
        next();
    } catch (error) {
        console.log(error)
        res.status(401).json({ error: 'Invalid token catch' });
    }
 };

module.exports = verifyToken;