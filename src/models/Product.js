const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define our model
const productSchema = new Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  mrp: {
    type: Number,
    required: true
  },
  sellPrice: {
    type: Number,
    required: true
  },
  productImage: {
    type: String,
    required: true
  },
  isPublished: {
    type: Boolean,
    default: true
  },
  isPrime: {
    type: Boolean,
    default: true
  },
  currentStock: {
    type: Number,
    default: 0
  },
  avgRating: {
    type: Number,
    default: 0
  },
  reviewCount: {
    type: Number,
    default: 0
  },
  brandName: String,
  sellerName: String,
  deliveryCharge: {
    type: Number,
    default: 0
  },
  createdAt : { type : Date, default: Date.now },
  updatedAt : { type : Date, default: Date.now }
}, {
  usePushEach: true
});

mongoose.model('Product', productSchema);
