const users_tbl = require('../db/users_db');

const createUser = async (req, res) => {
    const result = await users_tbl.createUser(req.body);
    const newUser = await users_tbl.selectUser(result);
    res.status(200).json(newUser);
};

const getUser = async (req, res) => {
    const result = await users_tbl.selectUser(req.params.id);
    typeof result !== 'undefined' ? res.status(200).json(result) : res.status(404).json({'message':'User not found'});
};

module.exports = {createUser, getUser}