const express = require('express');
const router = express.Router();
const {getHomepage, getABC, getHoiDi} = require('../controllers/homeController');


router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/hoidi', getHoiDi);

module.exports = router;