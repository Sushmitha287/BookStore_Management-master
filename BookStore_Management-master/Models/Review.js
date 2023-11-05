const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sushmitha:sushu@cluster0.ok4uph7.mongodb.net/')
const reviewSchema = new mongoose.Schema({
  comment: String,
  rating: Number,
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
});

module.exports = mongoose.model('Review', reviewSchema);
