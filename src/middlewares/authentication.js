const jwt = require('jsonwebtoken')

const authentication = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, 'openinapp_secret', (err, decoded) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = decoded;
            console.log(decoded)
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports={
    authentication
}