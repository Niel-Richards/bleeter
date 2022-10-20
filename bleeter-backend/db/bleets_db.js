const database = require('./database');

const getAllBleets = async () => {
    const getAllQuery = `SELECT * FROM bleets`;
    return database.selectAll(getAllQuery);
}

const createBleet = async (data) => {
    const createQuery = `INSERT INTO bleets(bleet) VALUES(?)`;
    return database.insertRow(createQuery, data.bleet);
}

const getBleet = async (_id) => {
    const getQuery = `SELECT * FROM bleets where bleet_id=?`;
    return database.selectRow(getQuery, _id);
}

const deleteBleet = async (_id) => {
    const deleteQuery = `DELETE * FROM bleets where bleet_id=?`;
    return database.deleteRow(deleteQuery, _id);
}

module.exports = {getAllBleets, createBleet, getBleet, deleteBleet};