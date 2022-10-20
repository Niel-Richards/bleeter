const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const bleet_tbl = require('./db/bleets_db');
const users_tbl = require('./db/users_db');
const followers_tbl = require('./db/followers_db');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.listen(5000, () => 'Listening on port :5000');


app.get('/', async (req, res) => {
    const result = await bleet_tbl.getAllBleets();
    res.status(200).json(result);
});

// app.get('/:id', async (req, res) => {
//     const result = await bleet_tbl.getBleet(req.params.id);
//     typeof !== 'undefined' ? res.status(200).json(result) : json.status(404).json({'message':'Bleet not found'});
//     //res.status(200).json(result);
// });

app.post('/', async (req,res) => {
    const result = await bleet_tbl.createBleet(req.body);
    const newBleet = await bleet_tbl.getBleet(result);
    res.status(200).json(newBleet);
});

// Follower Routes
app.get('/follows', async (req, res) => {
    console.log('Enetering the follow route');
    const loggedInUserId = 29;
    const countFollowers = await followers_tbl.countFollowers(loggedInUserId);
    const countFollowed = await followers_tbl.countFollowed(loggedInUserId);
    res.status(200).json([countFollowed,countFollowers]);
    console.log('Leaving the follow route');

});

// User routes

app.get('/users/:id', async (req, res) => {
    const result = await users_tbl.selectUser(req.params.id);
    typeof result !== 'undefined' ? res.status(200).json(result) : res.status(404).json({'message':'User not found'});
});

app.post('/users', async (req, res) => {
    //check if you name exists first
    const result = await users_tbl.createUser(req.body);
    const newUser = await users_tbl.selectUser(result);
    res.status(200).json(newUser);
});
