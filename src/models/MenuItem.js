const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define our model
const modelSchema = new Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  offerPrice: {
    type: Number,
    required: true
  },
  itemImage: {
    type: String,
    required: true
  },
  description: String,
  isVeg: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt : { type : Date, default: Date.now },
  updatedAt : { type : Date, default: Date.now }
}, {
  usePushEach: true
});

mongoose.model('MenuItem', modelSchema);
