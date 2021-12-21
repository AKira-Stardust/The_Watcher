const express = require('express');
const router = express.Router();

const allController = require('../controllers/allController');

//GET SINGLE DRAMA DETAILS
router.get('/', allController.all_details);

//ADD NEW DRAMA - GET
router.get('/addNew', allController.all_add_get);

//ADD NEW DRAMA - POST
router.post('/', allController.all_add_post);


module.exports = router;