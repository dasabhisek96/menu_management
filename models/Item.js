const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  subCategoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  taxApplicable: { type: Boolean },
  tax: { type: Number },
  baseAmount: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  totalAmount: { type: Number, required: true }
});

module.exports = mongoose.model('Item', ItemSchema);
