const { HoldingsModel } = require("../Models/HoldingModel");
const { PositionsModel } = require("../Models/PositionsModel");
const { OrdersModel } = require("../Models/OrdersModel");



  module.exports.Holdings = async (req, res, next) => {
    try {
      const positions = await PositionsModel.find({});
      res.json(positions);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch positions." });
    }
  }

  module.exports.Positions = async (req, res, next) => {
    let allPositions = await PositionsModel.find({})
    res.json(allPositions);
  }

  module.exports.Orders = async (req, res, next) => {
    try {
      const { name, qty, price, mode } = req.body;
      const newOrder = new OrdersModel({ name, qty, price, mode });
      await newOrder.save();
      res.send("Order saved");
    } catch (err) {
      res.status(500).json({ error: "Failed to save order." });
    }
  }



