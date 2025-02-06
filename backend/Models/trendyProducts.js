const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TrendyProductSchema = new Schema({
  name: String,
  price: String,
  category: String,
  image: String,
  description: String,
  rating: Number,
});

const TrendyProducts = mongoose.model(
  "trendyProducts",
  TrendyProductSchema,
  "trendyProducts"
);


module.exports = TrendyProducts;