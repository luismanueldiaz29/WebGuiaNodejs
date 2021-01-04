const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller')
const checkJwt = require('../middlewares/jwt');

router.get('/', [checkJwt], controller.get);
router.get('/:id', [checkJwt], controller.getId);
router.post('/', controller.post);
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

module.exports = router;