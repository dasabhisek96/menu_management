const SubCategory = require('../models/SubCategory');

// Create SubCategory
exports.createSubCategory = async (req, res) => {
  try {
    const subCategory = new SubCategory(req.body);
    await subCategory.save();
    res.status(201).json(subCategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All SubCategories
exports.getSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find();
    res.status(200).json(subCategories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get SubCategory by ID or Name
exports.getSubCategoryByIdOrName = async (req, res) => {
  try {
    const { idOrName } = req.params;
    const subCategory = await SubCategory.findOne({
      $or: [{ _id: idOrName }, { name: idOrName }]
    });
    if (!subCategory) return res.status(404).json({ error: 'SubCategory not found' });
    res.status(200).json(subCategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update SubCategory
exports.updateSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const subCategory = await SubCategory.findByIdAndUpdate(id, req.body, { new: true });
    if (!subCategory) return res.status(404).json({ error: 'SubCategory not found' });
    res.status(200).json(subCategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
