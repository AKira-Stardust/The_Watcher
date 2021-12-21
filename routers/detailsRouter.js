const express = require('express');
const router = express.Router();

const detailsController = require('../controllers/detailsController');

//GET SINGLE DRAMA DETAILS
router.get('/:id', detailsController.drama_details);

module.exports = router;