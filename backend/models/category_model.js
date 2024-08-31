const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategorySchema = new Schema({
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: [String], // Array of strings
        required: true
    },
    icon: {
        type: String, // URL or path to the icon
        required: true
    }

  });
  const Category = mongoose.model('category', CategorySchema);
  module.exports = Category;