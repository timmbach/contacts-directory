const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  image: { type: String, required: true },
  created: {
    type: Date,
    required: true,
    default: Date.now,
  },
  viewCount: {
    type: Number,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
