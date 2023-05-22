const {runQuery} = require('./db');

async function getUsers() {
    const query = "SELECT * FROM accounts";
    const results = await runQuery(query);
    return results;
}

async function getUserByEmail(email) {
    const query = {
        name: 'fetch-user-by-email',
        text: 'SELECT * FROM accounts WHERE email = $1',
        values: [email],
    }
    const results = await runQuery(query);
    return results;
}

async function getUserByUsername(username) {
    const query = {
        name: 'fetch-user-by-username',
        text: 'SELECT * FROM accounts WHERE username = $1',
        values: [username],
    }
    const results = await runQuery(query);
    console.log(results);
    return results;
}

module.exports = {
    getUsers,
    getUserByEmail,
    getUserByUsername,
}