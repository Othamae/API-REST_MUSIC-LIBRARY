const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const {
  createItem,
  getItems,
  getItem,
  deleteItem,
  updateItem,
} = require("../controllers/Storage");
const { validatorGetItem } = require("../validators/storage");
// http://localhost:3001/api/storage

/**
 * List with all items
 */
router.get("/", getItems);
/**
 * Get only one item by id
 */
router.get("/:id", validatorGetItem, getItem);
/**
 * Delete item
 */
router.delete("/:id", validatorGetItem, deleteItem);
/**
 * Create new item
 */
router.post("/", uploadMiddleware.single("myfile"), createItem);

module.exports = router;
