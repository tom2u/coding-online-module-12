const express = require("express");
const candidateRoutes = require("./candidateRoutes");
const partyRoutes = require("./partyRoutes");

const router = express.Router();

router.use(candidateRoutes);
router.use(partyRoutes);

module.exports = router;
