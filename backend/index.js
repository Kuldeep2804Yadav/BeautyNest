const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter");
const  Products = require("./Models/cateoryProducts");
const TrendyProducts = require('./Models/trendyProducts')
const paypal = require('@paypal/checkout-server-sdk');
const app = express();
require("dotenv").config();
require("./Models/db");
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());


app.get("/api/categoryProducts", async (req, res) => {
  const { category } = req.query;
  let filter = {};

  if (category && category !== "all") {
    filter.category = category;
  }

  try {
    const data = await Products.find(filter);
    res.status(200).json([...data]);
    // console.log('data', data)

  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch category products" });
  }
});

app.get("/api/trendyProducts", async (req, res) => {
  try {
    const data = await TrendyProducts.find();

    res.status(200).json([...data]);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch category products" });
  }
});


app.get("/api/searchProducts", async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Search query is required" });
  }

 let products;
  try {
    if(query !== ''){
       products = await Products.find({
        name: { $regex: query, $options: "i" }, 
      });
    }else {
       products = await Products.find();
    }
    

    res.status(200).json(products);
  } catch (error) {
    console.error("Error searching products:", error);
    res.status(500).json({ error: "Failed to search products" });
  }
});




//payment gateway

const environment = new paypal.core.SandboxEnvironment(
  process.env.PAYPAL_CLIENT_ID,
  process.env.PAYPAL_SECRET
);
const client = new paypal.core.PayPalHttpClient(environment);

// Create PayPal Order
app.post("/create-order", async (req, res) => {
  const { totalAmount } = req.body;

  const request = new paypal.orders.OrdersCreateRequest();
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: totalAmount,
        },
      },
    ],
  });

  try {
    const order = await client.execute(request);
    res.json({ orderID: order.result.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Capture Payment
app.post("/capture-order", async (req, res) => {
  const { orderID } = req.body;

  const request = new paypal.orders.OrdersCaptureRequest(orderID);
  request.requestBody({});

  try {
    const capture = await client.execute(request);
    res.json({ capture });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



app.use("/auth", AuthRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
