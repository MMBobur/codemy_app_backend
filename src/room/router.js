const express = require('express');
const router = express.Router();

const ValidateScheme = require('./validator');
const validator = require('express-validation');
const roomCont = require("./controller");
const authenticate = require("../util/authenticate");
const permit = require("../util/permission");
const teachersCont = require('../oqituvchilar/controller');

router.route('/auth').post(teachersCont.auth);
router.use(authenticate);
router.use(permit("admin","user"));


router.get('/', roomCont.findAll);
router.get('/:id', roomCont.findById);
router.post('/', validator(ValidateScheme.addNew), roomCont.create);
router.put('/:id', validator(ValidateScheme.updateOne), roomCont.update);
router.delete('/:id', roomCont.delete);

module.exports = router;