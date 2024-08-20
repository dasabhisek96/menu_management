const express = require('express');
const router = express.Router();
const {
  createItem,
  getItems,
  getItemByIdOrName,
  updateItem,
  searchItemByName
} = require('../controllers/itemController');

router.post('/', createItem);
router.get('/', getItems);
router.get('/:idOrName', getItemByIdOrName);
router.put('/:id', updateItem);
router.get('/search', searchItemByName);

module.exports = router;
