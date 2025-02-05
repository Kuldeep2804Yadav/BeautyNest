const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategoryProductsSchema = new Schema({
  name: String,
  price: String,
  category: String,
  image: String,
  description: String,
  rating: Number,
});

const Products = mongoose.model(
  "categoryProducts",
  CategoryProductsSchema,
  "categoryProducts"
);

module.exports = Products;
