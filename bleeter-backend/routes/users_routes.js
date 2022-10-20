const express = require('express');
const { createUser, getUser } = require('../controllers/user_controller');
const router = express.Router();

router.route('/').post(createUser);
router.route('/:id').get(getUser);

module.exports = router;