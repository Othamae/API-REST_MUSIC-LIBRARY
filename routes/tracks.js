const express = require('express');
const router = express.Router();
const {authMiddleware}= require('../Middlewares/session')
const {checkRole} = require('../Middlewares/role')
const customHeader = require('../Middlewares/customHeader');
const {validatorCreateItem, validatorGetItem} = require('../validators/tracks');


const {getItems, getItem, createItem, updateItem, deleteItem} = require('../controllers/tracks')


/**
 * List with all items
 */
router.get('/',authMiddleware, getItems);
/**
 * Get item by id
 */
 router.get('/:id',authMiddleware,validatorGetItem, getItem);
/**
 * Create new item
 */
router.post('/',authMiddleware,checkRole(['admin', 'user']),validatorCreateItem, createItem);
/**
 * Update item
 */
 router.put('/:id',authMiddleware,validatorGetItem,validatorCreateItem , updateItem);

/**
 * Delete item
 */
router.delete('/:id',authMiddleware,validatorGetItem,deleteItem);





module.exports = router;