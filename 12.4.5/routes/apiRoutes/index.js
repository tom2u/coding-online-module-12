const express = require("express");
const candidateRoutes = require("./candidateRoutes");
const partyRoutes = require("./partyRoutes");
const voterRoutes = require("./voterRoutes");

const router = express.Router();

router.use(candidateRoutes);
router.use(partyRoutes);
router.use(voterRoutes);

module.exports = router;
