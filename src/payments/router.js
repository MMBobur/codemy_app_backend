const express = require('express');
const router = express.Router();

const ValidateScheme = require('./validator');
const validator = require('express-validation');
const PaymentsController = require("./controller");
// const admin = require('../admin/controller');
const authenticate = require("../util/authenticate");
const permit = require("../util/permission");
const teachersCont = require('../oqituvchilar/controller');

router.route('/auth').post(teachersCont.auth);
router.use(authenticate);
router.use(permit("admin","user"));


router.get('/', PaymentsController.findAll);
router.get('/:id', PaymentsController.findById);
router.post('/', validator(ValidateScheme.addNew), PaymentsController.create);
router.put('/:id', validator(ValidateScheme.updateOne), PaymentsController.update);
router.delete('/:id', PaymentsController.delete);

module.exports = router;