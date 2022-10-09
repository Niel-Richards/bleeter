const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db/database');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.listen(5000, () => 'Listening on port :5000');

app.get('/', async (req, res) => {
    const result = await db.selectAllBleets();
    res.status(200).json(result);
});
app.post('/', async (req,res) => {
    const result = await db.createBleet(req.body);
    const newBleet = await db.selectBleet(result);
    res.status(200).json(newBleet);
});