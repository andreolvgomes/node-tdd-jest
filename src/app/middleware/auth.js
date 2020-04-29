const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const APP_SECRET = "APP_SECRET";

module.exports = async(req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader)
        return res.status(401).send({ message: "Token not provided" });

    const [, token] = authHeader.split(' ');
    try {
        const decoded = await promisify(jwt.verify)(token, APP_SECRET);
        req.userId = decoded.id;
    } catch (error) {
        return res.status(401).send({ message: "Token invalid" });
    }
    return next();
}