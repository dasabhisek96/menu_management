const Item = require('../models/Item');

// Create Item
exports.createItem = async (req, res) => {
  try {
    const item = new Item(req.body);
    item.totalAmount = item.baseAmount - item.discount;
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Items
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Item by ID or Name
exports.getItemByIdOrName = async (req, res) => {
  try {
    const { idOrName } = req.params;
    const item = await Item.findOne({
      $or: [{ _id: idOrName }, { name: idOrName }]
    });
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Item
exports.updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findByIdAndUpdate(id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: 'Item not found' });
    item.totalAmount = item.baseAmount - item.discount;
    await item.save();
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Search Items by Name
exports.searchItemByName = async (req, res) => {
  try {
    const { name } = req.query;
    const items = await Item.find({ name: new RegExp(name, 'i') });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
