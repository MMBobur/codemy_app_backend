const express = require("express");
const router = express.Router();

const levelsRouter = require("./level/router");
const groupsRouter = require("./groups/router");
const paymentsRouter = require("./payments/router");
const oqituvchilarRouter = require('./oqituvchilar/router');
const onlyOqituvchiRouter = require('./oqituvchilar/onlyOqituvchilar');
const adminRouter = require("./admin/router");
const oqituvchiRouter = require("./oqituvchilar/router");
const oquvchilarRouter = require("./oquvchilar/router");
const roomRouter = require("./room/router");
const qabulRouter = require("./qabul/router");

router.use("/levels", levelsRouter);
router.use("/groups", groupsRouter);
router.use("/oqituvchilar", oqituvchilarRouter);
router.use("/payments", paymentsRouter);
router.use("/onlyOqituvchi", onlyOqituvchiRouter);
router.use("/oquvchilar", oquvchilarRouter);
router.use("/room", roomRouter);
router.use("/qabul", qabulRouter);

router.use("/admin", adminRouter);
router.use("/oqituvchi", oqituvchiRouter);


module.exports = router;
