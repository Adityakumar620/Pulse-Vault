const router = require("express").Router();
const { Holdings, Positions, Orders } = require("../Controllers/DataController");

router.get("/allHoldings", Holdings);
router.get("/allPositions", Positions);
router.post("/newOrder", Orders);

module.exports = router;