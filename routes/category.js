const express = require('express');
const router = express.Router();
const {
  createCategory,
  getCategories,
  getCategoryByIdOrName,
  updateCategory
} = require('../controllers/categoryController');

router.post('/', createCategory);
router.get('/',getCategories);
router.get('/', getCategoryByIdOrName);
router.put('/', updateCategory);

module.exports = router;