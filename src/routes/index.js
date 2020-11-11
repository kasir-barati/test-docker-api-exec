const router = require('express').Router();

const controller = require('../controllers/index');

router
    .route('/')
    .post(controller.runCommand);

module.exports = router;