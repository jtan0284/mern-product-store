import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updatedProduct,
} from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.put("/:id", updatedProduct);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);

export default router;
