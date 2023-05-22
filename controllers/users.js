const jwt = require('jsonwebtoken');
const { getUserByUsername, getUsers } = require('../repo/users');

const loginUser=  async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    console.log(username, password);
    const rows = await getUserByUsername(username);
    if (rows.length === 0) {
        return res.status(400).send('Cannot find user');
    }
    const user = rows[0];
    if (user.password !== password) {
        return res.status(400).send('Incorrect password');
    }

    const access_token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({ access_token: access_token });
}

module.exports = {
    loginUser,
};