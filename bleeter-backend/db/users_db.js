const database = require("./database");
const bcrypt = require('bcrypt');

const selectUser = async (_id) => {
    const getUserQuery = `SELECT user_id,username FROM users where user_id=?`;
    return database.selectRow(getUserQuery, _id);
}

const createUser = async (newUser) => {
    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(newUser.password,salt);
    const createUserQuery = `INSERT INTO users(username, password) VALUES(?,?)`;
    return database.insertRow(createUserQuery,[newUser.username,password]);
}

module.exports = {selectUser, createUser};