const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define our model
const modelSchema = new Schema({
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
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
  address: {
    type: String,
    required: true
  },
  restaurantImage: {
    type: String,
    required: true
  },
  costForTwo: {
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
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt : { type : Date, default: Date.now },
  updatedAt : { type : Date, default: Date.now }
}, {
  usePushEach: true
});

mongoose.model('Restaurant', modelSchema);
