import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updatedProduct,
} from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.put("/:id", createProduct);
router.post("/", updatedProduct);
router.delete("/:id", deleteProduct);

export default router;
