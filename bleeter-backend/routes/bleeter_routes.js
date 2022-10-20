const express = require('express');
const router = express.Router();
const {getAllBleets, createBleet, getBleet} = require('../controllers/bleets_controller');

router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

router.route('/').get(getAllBleets).post(createBleet);

router.route('/:id').get(getBleet);

module.exports = router;