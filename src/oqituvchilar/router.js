const express = require('express');
const router = express.Router();
const validate = require("express-validation");

const Validator = require("./validator");
const teachersCont = require('./controller');
const upload = require('../util/upload');
const authenticate = require("../util/authenticate");
const permit = require("../util/permission");
// const admin = require('../admin/controller');

router.route('/auth').post(teachersCont.auth);
// router.get('/group', teachersCont.group)
router.use(authenticate);
router.use(permit("admin","user"));

router.get('/', teachersCont.findAll);
router.get('/:id', teachersCont.findOne);
router.post('/', upload.single('image'), (validate(Validator.addNew), teachersCont.create));
router.put('/:id', upload.single('image'), (validate(Validator.updateOne), teachersCont.update));
router.delete('/:id', (validate(Validator.deleteOne), teachersCont.delete));

module.exports = router;