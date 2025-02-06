const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter");
const  Products = require("./Models/cateoryProducts");
const TrendyProducts = require('./Models/trendyProducts')
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
app.use("/auth", AuthRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
