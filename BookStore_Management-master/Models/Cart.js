const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sushmitha:sushu@cluster0.ok4uph7.mongodb.net/')
const cartSchema = new mongoose.Schema({
    image:{
      type:String
    },
    title:{
        type:String
    },
    price:{
        type:Number
    },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book', 
    required: true,
  },
  quantity: {
    type: Number,
    default: 1, 
  },
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
