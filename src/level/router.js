const express = require('express');
const router = express.Router();

const ValidateScheme = require('./validator');
const validator = require('express-validation');
const levelsController = require("./controller");
const admin = require('../admin/controller');
const authenticate = require("../util/authenticate");
const permit = require("../util/permission");
const teachersCont = require('../oqituvchilar/controller');

router.route('/auth').post(teachersCont.auth);
router.use(authenticate);
router.use(permit("admin","user"));


router.get('/', levelsController.findAll);
router.get('/:id', levelsController.findById);
router.post('/', validator(ValidateScheme.addNew), levelsController.create);
router.put('/:id', validator(ValidateScheme.updateOne), levelsController.update);
router.delete('/:id', levelsController.delete);

module.exports = router;