const express = require('express');
const router = express.Router();

const watchedController = require('../controllers/watchedController');

//GET INDEX
router.get('/', watchedController.watched_index);

//ADD NEW DRAMA - GET
router.get('/addNew', watchedController.watched_add_get);

//ADD NEW DRAMA - POST
router.post('/', watchedController.watched_add_post)

module.exports = router;