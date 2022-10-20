const bleets_tbl = require('../db/bleets_db');

const getAllBleets = async (req, res) => {
    const result = await bleets_tbl.getAllBleets();
    res.status(200).json(result);
};

const createBleet = async (req, res) => {
    const result = await bleets_tbl.createBleet(req.body);
    const newBleet = await bleets_tbl.getBleet(result);
    res.status(200).json(newBleet);
};

const getBleet = async (req, res) => {
    const result = await bleets_tbl.getBleet(req.params.id);
    typeof result !== 'undefined' ? res.status(200).json(result) : json.status(404).json({'message':'Bleet not found'});
    res.status(200).json(result);
};
module.exports = {getAllBleets, createBleet, getBleet};