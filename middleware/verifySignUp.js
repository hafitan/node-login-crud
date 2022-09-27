const db = require('../config/model');
const role = db.role;
const user = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
    // username
    user.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (user) {
            res.status(404).send({
                message: "Failed! Username is already in use!"
            });
            return;
        }
        // Email
        user.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if(user) {
                res.status(400).send({
                    message: "Failed! Email is already in use!"
                });
                return;
            }
            next();
        });
    });
};
checkRolesExisted = (req, res, next) => {
    if(req.body.name) {
        for (let i =0; i < req.body.name.length; i++) {
            if(!role.inclides(req.body.name[i])) {
                res.status(400).send({
                    message: "Failed! Role does not exist =" + req.body.name[i]
                });
                return;
            }
        }
    }
    next();
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
    checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;