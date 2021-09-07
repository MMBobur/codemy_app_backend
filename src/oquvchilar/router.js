const express = require('express');
const router = express.Router();
const validate = require('express-validation');

const admin = require('../admin/controller');
const Validator = require('./validator');
const authenticate = require("../util/authenticate");
const permit = require("../util/permission");

const OquvchiCont = require('./controller');
const teachersCont = require('../oqituvchilar/controller');

router.route('/auth').post(teachersCont.auth);
router.use(authenticate);
router.use(permit("admin","user"));



router.get('/' , OquvchiCont.findAll);
router.post('/', validate(Validator.addNew), OquvchiCont.create);
router.get('/:id', OquvchiCont.findById);
router.put('/:id',validate(Validator.updateOne), OquvchiCont.update);
router.delete('/:id',validate(Validator.deleteOne),OquvchiCont.delete);

module.exports = router;