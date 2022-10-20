const express = require('express');
const router = express.Router();
const {getFollowersSummary} = require('../controllers/followers_controller');

router.route('/').get(getFollowersSummary);

module.exports = router;