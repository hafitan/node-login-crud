const jwt = require('jsonwebtoken');
const config = require('../config/database/mysql.js');
const { role } = require('../config/model');
const db = require('../config/model');
const User = db.user;

verifyTOken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        req.userId = decoded.id,
        next();
    });
};

isAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(role => {
            for (let i = 0; i < role.length; i++) {
                if (role[i].name === "admin") {
                    next();
                    return;
                }
            }
    
            res.status(403).send({
                message: "Require Admin Role!"
            });
            return;
        });
    });
};