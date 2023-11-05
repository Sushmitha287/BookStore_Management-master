const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sushmitha:sushu@cluster0.ok4uph7.mongodb.net/')

const bookSchema = new mongoose.Schema({
  image:String,
  title: String,
  author: String,
  ISBN: {type:String, unique:true},
  price: Number,
  quantity: Number,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
});

module.exports = mongoose.model('Book', bookSchema);
