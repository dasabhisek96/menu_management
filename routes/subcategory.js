const express = require('express');
const router = express.Router();
const {
  createSubCategory,
  getSubCategories,
  getSubCategoryByIdOrName,
  updateSubCategory
} = require('../controllers/subcategoryController');

router.post('/', createSubCategory);
router.get('/', getSubCategories);
router.get('/:idOrName', getSubCategoryByIdOrName);
router.put('/:id', updateSubCategory);

module.exports = router;