const express = require('express');
const router = express.Router();

const ValidateScheme = require('./validator');
const validator = require('express-validation');
const GroupsController = require("./controller");
const authenticate = require("../util/authenticate");
const permit = require("../util/permission");
const teachersCont = require('../oqituvchilar/controller');

router.route('/auth').post(teachersCont.auth);
router.use(authenticate);
router.use(permit("admin","user"));

router.get('/', GroupsController.findAll);
router.get('/:id', GroupsController.findById);
router.post('/', validator(ValidateScheme.addNew), GroupsController.create);
router.put('/:id', validator(ValidateScheme.updateOne), GroupsController.update);
router.delete('/:id', GroupsController.delete);

module.exports = router;