
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser  = require('body-parser');
const cors  = require('cors')

const app = express();
const cookieParser = require("cookie-parser");

const authRoute = require("./Routes/AuthRoute");
// const Holdings = require("./Routes/DataRoute");
// const Positions = require("./Routes/DataRoute");
// const Orders = require("./Routes/DataRoute");

const { HoldingsModel } = require("./Models/HoldingModel");
const { PositionsModel } = require("./Models/PositionsModel");
const { OrdersModel } = require("./Models/OrdersModel");

const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

// app.use(cors());

app.use(
  cors({
    origin: ["http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(bodyParser.json());

app.use(express.json());

app.use(cookieParser());

app.use("/", authRoute);

// app.use('/allHoldings', Holdings);

// app.use('/allPositions', Positions);

// app.use('/newOrder', Orders);

app.get('/allHoldings', async(req,res) => {
    let allHoldings = await HoldingsModel.find({})
    res.json(allHoldings)
});

app.get('/allPositions', async(req,res) => {
    let allPositions = await PositionsModel.find({})
    res.json(allPositions);
});

app.get('/allOrders', async(req,res) => {
  let allOrders = await OrdersModel.find({})
  res.json(allOrders);
});

app.post('/newOrder', async(req, res) => {
  let newOrder = new OrdersModel({
    name:req.body.name,
    qty:req.body.qty,
    price:req.body.price,
    mode:req.body.mode,
  })
  newOrder.save()
  res.send("orderSaved")
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

