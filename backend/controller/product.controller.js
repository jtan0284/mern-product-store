import mongoose from "mongoose";
import Product from "../model/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("error in fetching products:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body; // user will send this data

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all the fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    // insert the document into the MongoDB database, while the await - waits for the database operation to complete before moving to the next line
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in Create prodcut:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updatedProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product Id" });
  }

  try {
    const updatedProducts = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    // new: true return the updated document otherwise old one
    res.status(200).json({ success: true, data: updatedProducts });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product Id" });
  }

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.log("error in deleting products:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
