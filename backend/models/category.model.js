import mongoose from "mongoose";
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
  export default mongoose.model('Category', CategorySchema);
  