const express = require('express');
const { testUserController } = require('../controller/testController');

//router object
const router = express.Router()

//router GET | POST | DELETE | UPDATE
router.get('/test-user',testUserController )

//export

module.exports = router;