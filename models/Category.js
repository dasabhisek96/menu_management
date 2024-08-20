const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  taxApplicable: { type: Boolean, required: true },
  tax: { type: Number },
  taxType: { type: String }
});

module.exports = mongoose.model('Category', CategorySchema);
