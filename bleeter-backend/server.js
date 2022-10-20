const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const bleeter_routes = require('./routes/bleeter_routes');
const users_routes = require('./routes/users_routes');
const followers_routes = require('./routes/followers_routes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.listen(5000, () => 'Listening on port :5000');

app.use('/bleets', bleeter_routes);
app.use('/users', users_routes);
app.use('/follows', followers_routes);