const Router = require('express');
const router = new Router();
const deviceInfoController = require('./../controllers/deviceInfoController');

router
    .post('/', deviceInfoController.create)
    .get('/', deviceInfoController.getAll)

module.exports = router;
