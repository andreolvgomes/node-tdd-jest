const { User } = require('../models');

class SessionController {
    async store(req, res) {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user)
            return res.status(401).send({ message: "User not found" });

        if (!(await user.checkPassword(password)))
            return res.status(401).send({ message: "Incorrect password" });

        return res.send({
            user,
            token: user.generateToken()
        });
    }

    async dashboard(req, res) {
        return res.status(200).send();
    }
}

module.exports = new SessionController();