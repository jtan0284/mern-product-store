import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

const Product = mongoose.model("Product", productSchema);
// 1st argument - mongoose automatically converts it to lowercase and pluralizes it to create the mongoDB collection name (products)
// 2nd argument - productSchema defines the structure of the documents

export default Product;
