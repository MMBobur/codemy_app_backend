const express = require('express');
const router = express.Router();

const ValidateScheme = require('./validator');
const validator = require('express-validation');
const qabulController = require("./controller");
const admin = require('../admin/controller')
const authenticate = require("../util/authenticate");
const permit = require("../util/permission");
const teachersCont = require('../oqituvchilar/controller');

router.route('/auth').post(teachersCont.auth);
router.use(authenticate);
router.use(permit("admin","user"));

router.get('/', qabulController.findAll);
router.get('/:id', qabulController.findById);
router.post('/', validator(ValidateScheme.addNew), qabulController.create);
router.put('/:id', validator(ValidateScheme.updateOne), qabulController.update);
router.delete('/:id', qabulController.delete);

module.exports = router;